import * as React from 'react';
import {
	Box,
	Avatar,
	Chip,
	Tooltip,
	AvatarGroup,
	LinearProgress,
	Typography,
	CircularProgress,
} from '@mui/material';
import PageTable from '../../components/ui/PageTable';

export const ProjectTable = ({rows = [], onRowClick}) => {
	const columns = [
		{
			field: 'projectName',
			headerName: 'Project Name',
			flex: 1,
			minWidth: 200,
			renderCell: (params) => (
				<div
					onClick={() => onRowClick && onRowClick(params.row)}
					sx={{
						cursor: 'pointer',
						'&:hover': {textDecoration: 'underline'},
					}}>
					{params.value}
				</div>
			),
		},
		{
			field: 'label',
			headerName: 'Label',
			width: 120,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => (
				<Chip
					label={params.value}
					size="small"
					sx={{fontSize: '0.75rem', fontWeight: 500}}
				/>
			),
		},
		{
			field: 'assignees',
			headerName: 'Assignees',
			width: 180,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => (
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
						{params.value?.map((user, i) => (
							<Tooltip key={i} title={user.name}>
								<Avatar
									src={user.avatar}
									sx={{width: 28, height: 28, fontSize: 13}}>
									{user.name[0]}
								</Avatar>
							</Tooltip>
						))}
					</AvatarGroup>
				</Box>
			),
		},
		{
			field: 'projectStatus',
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
			field: 'projectProgress',
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
			field: 'projectDueDate',
			headerName: 'Due Date',
			width: 180,
			headerAlign: 'center',
			align: 'center',
		},
	];

	return <PageTable columns={columns} rows={rows} />;
};
