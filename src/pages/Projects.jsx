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
import {DataStore} from '@aws-amplify/datastore';
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
					processed.push({
						id: project.id,
						projectLabel: project.projectLabel,
						projectName: project.projectName,
						projectStatus: project.projectStatus,
						projectProgress: project.projectProgress,
						projectDueDate: project.projectDueDate,
						assignees: users,
					});
				}

				setProjects(processed);
			} catch (error) {
				console.error('error fetching projects', error);
			}
		};
		fetchProjects();
	}, []);

	const handleOpenDrawer = () => setOpenDrawer(true);
	const handleCloseDrawer = () => setOpenDrawer(false);
	return (
		<>
			<PageComponent
				title="Projects"
				content={
					<>
						<ProjectTable
							rows={projects}
							// onRowClick={(row) => setSelectedProject(row)}
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
			/>
		</>
	);
};

export default Projects;
