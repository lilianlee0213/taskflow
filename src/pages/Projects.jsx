import React, {useState} from 'react';
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
			<ProjectDrawer
				openDrawer={openDrawer}
				handleCloseDrawer={handleCloseDrawer}
			/>
		</>
	);
};

export default Projects;
