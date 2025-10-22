import React, {useState} from 'react';
import PageComponent from '../components/PageComponent';
import {
	Button,
	Drawer,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import {RiExpandDiagonalLine} from 'react-icons/ri';

const Projects = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleOpenDrawer = () => setOpenDrawer(true);
	const handleCloseDrawer = () => setOpenDrawer(false);
	return (
		<>
			<PageComponent
				title="Projects"
				content={
					<>
						<p>This is the project page content.</p>
						<Button variant="contained" onClick={handleOpenDrawer}>
							Click to open
						</Button>
					</>
				}
				headerTitle={'All projects'}
			/>
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
				<div>
					<RiExpandDiagonalLine className="w-6 h-6" />
					<h3>Project Details</h3>
					<p>This will be your drawer content.</p>
					<Button variant="outlined" onClick={handleCloseDrawer}>
						Close
					</Button>
				</div>
			</Drawer>{' '}
		</>
	);
};

export default Projects;
