import React, {useEffect, useState} from 'react';
import PageComponent from '../components/PageComponent';
import {
	Breadcrumbs,
	Button,
	Divider,
	Drawer,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	Link,
	Tooltip,
	Chip,
	Avatar,
} from '@mui/material';
import {
	BookmarkIcon,
	PencilSquareIcon,
	PlusIcon,
} from '@heroicons/react/24/outline';
import {RiExpandDiagonal2Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import ProjectDrawer from '../features/projects/ProjectDrawer';
import {ProjectTable} from '../features/projects/ProjectTable';
import {DataStore, Predicates} from '@aws-amplify/datastore';
import {Project, User, ProjectAssignees, Comment, ActivityLog} from '../models';
const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const [openDrawer, setOpenDrawer] = useState(false);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projects = await DataStore.query(Project);
				const processed = [];

				for (const project of projects) {
					const assignees = await project.assignees.toArray();
					const users = await Promise.all(
						assignees.map(async (relation) => {
							const user = await relation.user;
							return {
								name: `${user.firstName} ${user.lastName}`,
								avatar: user.avatar,
							};
						})
					);

					/** 🧑‍💼 Creator (belongsTo) */
					const creator = await project.creator;
					/** 💬 Comments */
					const comments = await project.comments.toArray();
					const commentList = await Promise.all(
						comments.map(async (c) => {
							const author = await c.author;
							return {
								user: {
									name: `${author.firstName} ${author.lastName}`,
									avatar: author.avatar,
								},
								text: c.message,
								createdAt: c.createdAt,
							};
						})
					);

					/** 🕓 Activity Logs */
					const activityLogs = await project.activityLogs.toArray();
					const activityList = await Promise.all(
						activityLogs.map(async (log) => {
							const actor = await log.actor; // belongsTo(User)
							const projectRef = await log.project; // belongsTo(Project)

							return {
								id: log.id,
								type: log.taskID ? 'task' : 'project',
								project: projectRef?.projectName || 'Unknown Project',
								actor: {
									name: `${actor.firstName} ${actor.lastName}`,
									avatar: actor.avatar,
								},
								action: log.action,
								content: log.content,
								createdAt: log.timestamp || log.createdAt,
								updatedAt: log.updatedAt || null,
							};
						})
					);

					processed.push({
						id: project.id,
						projectLabel: project.projectLabel,
						projectName: project.projectName,
						projectStatus: project.projectStatus,
						projectProgress: project.projectProgress,
						projectDueDate: project.projectDueDate,
						description: project.description,
						assignees: users,
						createdBy: creator,
						comments: commentList,
						activityLogs: activityList,
					});
				}
				console.log(processed);
				setProjects(processed);
			} catch (error) {
				console.error('error fetching projects', error);
			}
		};
		fetchProjects();
	}, []);

	const handleOpenDrawer = (project) => {
		if (!project) {
			return;
		}
		setOpenDrawer(true);
		setSelectedProject(project);
	};
	const handleCloseDrawer = () => {
		setOpenDrawer(false);
		setSelectedProject(null);
	};
	return (
		<>
			<PageComponent
				title="Projects"
				content={
					<>
						<ProjectTable
							rows={projects}
							onRowClick={(row) => handleOpenDrawer(row)}
						/>
						{/* <Button variant="contained" onClick={handleOpenDrawer}>
							Click to open
						</Button> */}
					</>
				}
				headerTitle={'All projects'}
			/>
			<ProjectDrawer
				openDrawer={openDrawer}
				handleCloseDrawer={handleCloseDrawer}
				project={selectedProject || null}
			/>
		</>
	);
};

export default Projects;
