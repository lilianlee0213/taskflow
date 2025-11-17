import React, {useEffect, useState} from 'react';
import PageComponent from '../components/PageComponent';
import {Task} from '../models';
import {DataStore} from '@aws-amplify/datastore';
import {Project, User, ProjectAssignees, Comment, ActivityLog} from '../models';
import TaskTable from '../features/tasks/TaskTable';
import TaskDrawer from '../features/tasks/TaskDrawer';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const tasks = await DataStore.query(Task);
				const processed = [];

				for (const task of tasks) {
					const projectInfo = await task.project;
					const author = await projectInfo.creator;
					const projectTeam = await projectInfo.team;
					const assigneeJoins = await projectInfo.assignees.toArray();

					const assigneeList = await Promise.all(
						assigneeJoins.map(async (join) => {
							const user = await join.user;
							return {
								name: `${user.firstName} ${user.lastName}`,
								avatar: user.avatar,
							};
						})
					);
					const project = {
						name: projectInfo.projectName,
						team: projectTeam.name,
						status: projectInfo.projectStatus,
						due: projectInfo.projectDueDate,
						progress: projectInfo.projectProgress,
						createdBy: {
							name: `${author.firstName} ${author.lastName}`,
							avatar: author.avatar,
						},
						assignees: assigneeList,
					};

					const assigneeInfo = await task.assignee;
					const assignee = {
						name: `${assigneeInfo.firstName} ${assigneeInfo.lastName}`,
						avatar: assigneeInfo.avatar,
					};

					/** 🧑‍💼 Creator (belongsTo) */
					const creatorInfo = await task.creator;
					const creator = {
						name: `${creatorInfo.firstName} ${creatorInfo.lastName}`,
						avatar: creatorInfo.avatar,
					};

					/** 💬 Comments */
					const comments = await task.comments.toArray();
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
					const activityLogs = await task.activityLogs.toArray();
					const activityList = await Promise.all(
						activityLogs.map(async (log) => {
							const actor = await log.actor; // belongsTo(User)
							const taskRef = await log.task; // belongsTo(task)

							return {
								id: log.id,
								type: log.taskID ? 'task' : 'task',
								task: taskRef?.taskName || 'Unknown Task',
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
						...task,
						project,
						assignee,
						comments,
						createdBy: creator,
						comments: commentList,
						activityLogs: activityList,
					});
				}
				console.log('All Tasks:', processed);
				setTasks(processed);
			} catch (error) {
				console.error('error fetching tasks', error);
			}
		};
		fetchTasks();
	}, []);
	const handleOpenDrawer = (task) => {
		if (!task) {
			return;
		}
		setOpenDrawer(true);
		setSelectedTask(task);
	};
	const handleCloseDrawer = () => {
		setOpenDrawer(false);
		setSelectedTask(null);
	};
	return (
		<>
			<PageComponent
				title="Tasks"
				content={
					<>
						<TaskTable
							rows={tasks}
							onRowClick={(row) => handleOpenDrawer(row)}
						/>
					</>
				}
				headerTitle={'All tasks'}
			/>
			<TaskDrawer
				openDrawer={openDrawer}
				handleCloseDrawer={handleCloseDrawer}
				task={selectedTask || null}
			/>
		</>
	);
};

export default Tasks;
