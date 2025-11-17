import React, {useEffect, useState} from 'react';
import {
	Typography,
	Tooltip,
	Drawer,
	Divider,
	Chip,
	Box,
	AvatarGroup,
	Avatar,
} from '@mui/material';
import {BookmarkIcon, PencilSquareIcon} from '@heroicons/react/24/outline';
import {RiExpandDiagonal2Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import DrawerHeader from '../../components/ui/DrawerHeader';
import TaskOverview from './TaskOverview';
import TaskDetails from './TaskDetails';

import ProjectInfoPanel from '../tasks/ProjectInfoPanel';

const TaskDrawer = ({openDrawer, handleCloseDrawer, task}) => {
	const [showProject, setShowProject] = useState(false);

	const {name, team, status, due, assignees, createdBy, progress} =
		task?.project || {};

	const handleOpenProject = () => setShowProject(true);
	const handleCloseProject = () => setShowProject(false);
	useEffect(() => {
		if (openDrawer) {
			return;
		}
		setShowProject(false);
	}, [openDrawer]);
	return (
		<Drawer
			anchor="right"
			open={openDrawer}
			onClose={handleCloseDrawer}
			slotProps={{
				paper: {
					sx: {
						width: showProject ? '65vw' : '45vw',
						backgroundColor: 'var(--color-drawer)',
						backgroundImage: 'none',
						p: 3,
						boxShadow: '0 0 12px rgba(0,0,0,0.08)',
					},
				},
			}}
			BackdropProps={{
				sx: {
					backgroundColor: 'rgba(0,0,0,0.1)',
				},
			}}>
			{task && (
				<div
					className={`h-full flex flex-col ${
						showProject ? '' : 'overflow-x-hidden'
					}`}>
					<DrawerHeader
						onCloseDrawer={handleCloseDrawer}
						showProject={showProject}
						onCloseProject={handleCloseProject}
					/>

					<div className="relative flex-1 flex h-full">
						<div className={`flex-1 pr-4 transition-all duration-200`}>
							<TaskOverview
								task={task}
								onProjectClick={handleOpenProject}
								showProject={showProject}
							/>
							<TaskDetails task={task} />
						</div>

						<div
							className={`absolute top-0 right-0 h-full w-1/3 border-l border-border bg-[var(--color-drawer)] p-4 pr-0 transition-transform duration-300 ${
								showProject ? 'translate-x-0' : 'translate-x-full'
							}`}>
							<ProjectInfoPanel
								name={name}
								team={team}
								status={status}
								due={due}
								assignees={assignees}
								createdBy={createdBy}
								progress={progress}
							/>
						</div>
					</div>
				</div>
			)}
		</Drawer>
	);
};

export default TaskDrawer;
