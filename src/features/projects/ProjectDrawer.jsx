import React, {useState} from 'react';
import {Drawer} from '@mui/material';
import ProjectOverview from './ProjectOverview';
import ProjectDetails from './ProjectDetails';
import ProjectTasks from './ProjectTasks';
import {ProjectAttachment} from './ProjectAttachment';
import DrawerHeader from '../../components/ui/DrawerHeader';
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
					<DrawerHeader onCloseDrawer={handleCloseDrawer} />
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
