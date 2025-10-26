import React from 'react';
import {Chip, Avatar, Typography, Box} from '@mui/material';
import {SimpleListTable} from '../../components/ui/SimpleListTable';
const ProjectTasks = () => {
	const taskRows = [
		{
			id: 1,
			name: 'Design homepage layout',
			status: 'Completed',
			assignee: {name: 'Lilian Lee', avatar: '/static/images/avatar/1.jpg'},
			dueDate: 'Oct 28, 2025',
		},
		{
			id: 2,
			name: 'Integrate analytics dashboard',
			status: 'In Progress',
			assignee: {name: 'Alex Kim', avatar: '/static/images/avatar/2.jpg'},
			dueDate: 'Oct 30, 2025',
		},
		{
			id: 3,
			name: 'Finalize content updates',
			status: 'Pending',
			assignee: {name: 'Kelly Markies', avatar: '/static/images/avatar/3.jpg'},
			dueDate: 'Nov 2, 2025',
		},
	];
	const taskColumns = [
		{
			field: 'name',
			headerName: 'Task',
			flex: 2,
			renderCell: (params) => (
				<div className="flex h-full justify-start items-center">
					<Typography sx={{fontWeight: 500}}>{params.value}</Typography>
				</div>
			),
		},
		{
			field: 'status',
			headerName: 'Status',
			flex: 1,
			renderCell: (params) => {
				const value = params.value;
				const statusColor =
					value === 'Completed'
						? {
								text: 'var( --color-chip-text-green)',
								bg: 'var(--color-chip-bg-green)',
						  }
						: value === 'In Progress'
						? {
								text: 'var( --color-chip-text-blue)',
								bg: 'var(--color-chip-bg-blue)',
						  }
						: value === 'Pending'
						? {
								text: 'var( --color-chip-text-yellow)',
								bg: 'var(--color-chip-bg-yellow)',
						  }
						: {
								text: 'var( --color-chip-text-red)',
								bg: 'var(--color-chip-bg-red)',
						  };

				return (
					<div className="flex h-full justify-start items-center">
						<Chip
							label={value}
							size="small"
							sx={{
								fontWeight: 500,
								color: statusColor.text,
								bgcolor: statusColor.bg,
							}}
						/>
					</div>
				);
			},
		},
		{
			field: 'assignee',
			headerName: 'Assignee',
			flex: 1.5,
			renderCell: (params) => {
				const {name, avatar} = params.value || {};
				return (
					<div className="flex h-full justify-start items-center">
						<Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
							<Avatar
								src={avatar}
								alt={name}
								sx={{
									width: 26,
									height: 26,
									fontSize: '0.75rem',
								}}>
								{!avatar && name?.[0]}
							</Avatar>
							<Typography variant="body2">{name}</Typography>
						</Box>
					</div>
				);
			},
		},
		{
			field: 'dueDate',
			headerName: 'Due Date',
			flex: 1,
			renderCell: (params) => (
				<div className="flex h-full justify-start items-center">
					<Typography
						variant="body2"
						sx={{color: 'text.secondary', width: '100%'}}>
						{params.value}
					</Typography>
				</div>
			),
		},
	];
	return (
		<div className="px-8">
			<SimpleListTable columns={taskColumns} rows={taskRows} height={340} />
		</div>
	);
};

export default ProjectTasks;
