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
import {ProjectTable} from '../features/projects/ProjectTable';

const Projects = () => {
	const projects = [
		{
			id: '1',
			projectName: 'TaskFlow Dashboard Redesign',
			label: 'UI/UX',
			assignees: [
				{name: 'Lilian', avatar: 'https://i.pravatar.cc/150?img=1'},
				{name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=2'},
			],
			projectStatus: 'In Progresdss',
			projectProgress: 65,
			projectDueDate: '2025-11-15',
		},
		{
			id: '2',
			projectName: 'AWS Amplify Integration',
			label: 'Backend',
			assignees: [{name: 'Mina', avatar: 'https://i.pravatar.cc/150?img=3'}],
			projectStatus: 'Completed',
			projectProgress: 100,
			projectDueDate: '2025-09-30',
		},
		{
			id: '3',
			projectName: 'Project Drawer UI',
			label: 'Frontend',
			assignees: [
				{name: 'James', avatar: 'https://i.pravatar.cc/150?img=4'},
				{name: 'Hana', avatar: 'https://i.pravatar.cc/150?img=5'},
			],
			projectStatus: 'In Progress',
			projectProgress: 45,
			projectDueDate: '2025-12-05',
		},
		{
			id: '4',
			projectName: 'Legal Hold Email Automation',
			label: 'Lambda',
			assignees: [{name: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=6'}],
			projectStatus: 'Completed',
			projectProgress: 100,
			projectDueDate: '2025-10-10',
		},
		{
			id: '5',
			projectName: 'Notification Center',
			label: 'UI/UX',
			assignees: [
				{name: 'Lilian', avatar: 'https://i.pravatar.cc/150?img=1'},
				{name: 'Mina', avatar: 'https://i.pravatar.cc/150?img=3'},
			],
			projectStatus: 'Planned',
			projectProgress: 0,
			projectDueDate: '2025-12-20',
		},
		{
			id: '6',
			projectName: 'Request Form Revamp',
			label: 'Frontend',
			assignees: [
				{name: 'James', avatar: 'https://i.pravatar.cc/150?img=4'},
				{name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=2'},
			],
			projectStatus: 'In Progress',
			projectProgress: 55,
			projectDueDate: '2025-11-10',
		},
		{
			id: '7',
			projectName: 'Team Overview Page',
			label: 'UI',
			assignees: [
				{name: 'Hana', avatar: 'https://i.pravatar.cc/150?img=5'},
				{name: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=6'},
			],
			projectStatus: 'In Progress',
			projectProgress: 35,
			projectDueDate: '2025-12-01',
		},
		{
			id: '8',
			projectName: 'File Versioning Feature',
			label: 'S3',
			assignees: [
				{name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=2'},
				{name: 'Lilian', avatar: 'https://i.pravatar.cc/150?img=1'},
			],
			projectStatus: 'Completed',
			projectProgress: 100,
			projectDueDate: '2025-10-05',
		},
		{
			id: '9',
			projectName: 'Analytics Dashboard',
			label: 'Reports',
			assignees: [{name: 'Mina', avatar: 'https://i.pravatar.cc/150?img=3'}],
			projectStatus: 'In Progress',
			projectProgress: 70,
			projectDueDate: '2025-11-30',
		},
		{
			id: '10',
			projectName: 'Time Tracking Module',
			label: 'UI',
			assignees: [
				{name: 'Hana', avatar: 'https://i.pravatar.cc/150?img=5'},
				{name: 'James', avatar: 'https://i.pravatar.cc/150?img=4'},
				{name: 'Mina', avatar: 'https://i.pravatar.cc/150?img=3'},
				{name: 'Lilian', avatar: 'https://i.pravatar.cc/150?img=1'},
				{name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=2'},
			],
			projectStatus: 'In Progress',
			projectProgress: 40,
			projectDueDate: '2025-11-25',
		},
		{
			id: '11',
			projectName: 'User Role Management',
			label: 'Auth',
			assignees: [{name: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=6'}],
			projectStatus: 'Completed',
			projectProgress: 100,
			projectDueDate: '2025-09-15',
		},
		{
			id: '12',
			projectName: 'Dark Mode Theme',
			label: 'UI',
			assignees: [
				{name: 'Lilian', avatar: 'https://i.pravatar.cc/150?img=1'},
				{name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=2'},
			],
			projectStatus: 'In Progress',
			projectProgress: 80,
			projectDueDate: '2025-10-31',
		},
	];
	const [selectedProject, setSelectedProject] = useState(null);
	const [openDrawer, setOpenDrawer] = useState(false);

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
