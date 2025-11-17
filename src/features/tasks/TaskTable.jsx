import React from 'react';
import PageTable from '../../components/ui/PageTable';
import {
	Box,
	Avatar,
	Chip,
	Tooltip,
	AvatarGroup,
	LinearProgress,
	Typography,
} from '@mui/material';
const TaskTable = ({rows = [], onRowClick}) => {
	const columns = [
		{
			field: 'taskName',
			headerName: 'Task',
			flex: 1,
			minWidth: 200,
			renderCell: (params) => (
				<div
					onClick={() => onRowClick && onRowClick(params.row)}
					className="cursor-pointer hover:underline transition-all ease-in-out">
					{params.value}
				</div>
			),
		},
		{
			field: 'project',
			headerName: 'Project',
			flex: 1,
			minWidth: 200,
			renderCell: (params) => {
				const project = params.value;
				return (
					<div className="cursor-pointer hover:underline transition-all ease-in-out">
						{project.name}
					</div>
				);
			},
		},
		{
			field: 'assignee',
			headerName: 'Assigneee',
			width: 100,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => {
				const user = params.value || [];

				if (user.length === 0) {
					return (
						<div className="h-full flex justify-center items-center">
							<Typography
								variant="body2"
								sx={{
									color: 'var(--color-text-muted)',
									fontSize: '0.85rem',
									fontWeight: 500,
								}}>
								—
							</Typography>
						</div>
					);
				}

				return (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100%',
						}}>
						<AvatarGroup
							max={4}
							sx={{justifyContent: 'center'}}
							slotProps={{
								additionalAvatar: {
									sx: {
										width: 28,
										height: 28,
										fontSize: '0.75rem',
										fontWeight: 600,
									},
								},
							}}>
							<Tooltip title={user.name}>
								<Avatar
									src={user.avatar}
									sx={{width: 28, height: 28, fontSize: 13}}>
									{user.name[0]}
								</Avatar>
							</Tooltip>
						</AvatarGroup>
					</Box>
				);
			},
		},
		{
			field: 'taskStatus',
			headerName: 'Status',
			width: 160,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => (
				<Chip
					label={params.value}
					color={
						params.value === 'Pending'
							? 'default'
							: params.value === 'On Hold'
							? 'default'
							: params.value === 'In Progress'
							? 'default'
							: params.value === 'Planned'
							? 'default'
							: params.value === 'Completed'
							? 'default'
							: 'default' // ✅ 기본 칩 (회색)
					}
					sx={{
						fontWeight: 500,
						backgroundColor:
							params.value === 'Pending'
								? 'var(--color-chip-bg-yellow)'
								: params.value === 'On Hold'
								? 'var(--color-chip-bg-purple)'
								: params.value === 'In Progress'
								? 'var(--color-chip-bg-blue)'
								: params.value === 'Planned'
								? 'var(--color-chip-bg-indigo)'
								: params.value === 'Completed'
								? 'var(--color-chip-bg-green)'
								: 'var(--color-chip-bg-default)',
						color:
							params.value === 'Pending'
								? 'var(--color-chip-text-yellow)'
								: params.value === 'On Hold'
								? 'var(--color-chip-text-purple)'
								: params.value === 'In Progress'
								? 'var(--color-chip-text-blue)'
								: params.value === 'Planned'
								? 'var(--color-chip-text-indigo)'
								: params.value === 'Completed'
								? 'var(--color-chip-text-green)'
								: 'var(--color-chip-text-default)',
					}}
					size="small"
				/>
			),
		},
		{
			field: 'taskProgress',
			headerName: 'Progress',
			width: 160,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => (
				<div className="h-full flex justify-center items-center">
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 1,
							width: '100%',
						}}>
						<Box sx={{flexGrow: 1}}>
							<LinearProgress
								variant="determinate"
								value={params.value}
								sx={{
									height: 8,
									borderRadius: 4,
									backgroundColor: 'var(--color-border)',
									'& .MuiLinearProgress-bar': {
										backgroundColor: 'var(--color-primary)',
										opacity: 0.7,
									},
								}}
							/>
						</Box>
						<Typography
							variant="caption"
							sx={{
								color: 'var(--color-text-muted)',
								fontWeight: 500,
								minWidth: 30,
							}}>
							{`${params.value}%`}
						</Typography>
					</Box>
				</div>
			),
		},
		{
			field: 'taskDueDate',
			headerName: 'Due Date',
			width: 180,
			headerAlign: 'center',
			align: 'center',
		},
	];
	return <PageTable columns={columns} rows={rows} />;
};

export default TaskTable;
