import React, {useState} from 'react';
import {Typography, Tooltip, Drawer} from '@mui/material';
import {BookmarkIcon, PencilSquareIcon} from '@heroicons/react/24/outline';
import {RiExpandDiagonal2Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import ProjectOverview from './ProjectOverview';
import ProjectDetails from './ProjectDetails';
import ProjectTasks from './ProjectTasks';
import {ProjectAttachment} from './ProjectAttachment';
const ProjectDrawer = ({openDrawer, handleCloseDrawer, project}) => {
	return (
		<Drawer
			anchor="right"
			open={openDrawer}
			onClose={handleCloseDrawer}
			slotProps={{
				paper: {
					sx: {
						width: '65vw',
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
			{project && (
				<div>
					<div className="flex justify-between items-center mb-4">
						<Tooltip title="Expand">
							<RiExpandDiagonal2Line className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-85 hover:opacity-100" />
						</Tooltip>
						<div className="flex items-center gap-1">
							<Tooltip title="Edit">
								<PencilSquareIcon className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-85 hover:opacity-100" />
							</Tooltip>
							<Tooltip title="Archive project">
								<BookmarkIcon className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-85 hover:opacity-100" />
							</Tooltip>
							<div className="flex justify-center items-center w-auto h-8 py-1 px-2 rounded-sm hover:bg-sidebar opacity-85 hover:opacity-100">
								<Typography
									variant="button"
									textTransform={'inherit'}
									sx={{color: 'var(--color-text)', cursor: 'pointer'}}>
									Share{' '}
								</Typography>
							</div>
						</div>
					</div>
					<ProjectOverview project={project} />
					<ProjectDetails project={project} />
					<ProjectTasks project={project} />
					<ProjectAttachment project={project} />
				</div>
			)}
		</Drawer>
	);
};

export default ProjectDrawer;
