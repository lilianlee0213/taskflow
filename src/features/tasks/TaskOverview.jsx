import React from 'react';
import {
	Avatar,
	Box,
	Chip,
	LinearProgress,
	Tooltip,
	Typography,
} from '@mui/material';

import InfoRow from '../../components/ui/InfoRow';
import dayjs from 'dayjs';

const TaskOverview = ({task, showProject, onProjectClick}) => {
	if (!task) return null;
	const {project, assignee, taskStatus, taskPriority, taskProgress, createdBy} =
		task;

	return (
		<div className="px-8">
			<Typography variant="h2" sx={{fontWeight: 600, mb: 4}}>
				{task.taskName}
			</Typography>
			<div className="w-full flex flex-col gap-4 mb-8">
				<InfoRow label="Project" variant={'body1'}>
					<Tooltip
						title="View project"
						placement="right-start"
						disableHoverListener={showProject}
						disableFocusListener={showProject}
						disableTouchListener={showProject}>
						<Chip
							label={project.name}
							onClick={onProjectClick}
							sx={{
								color: 'var(--color-chip-text-default) !important',
								bgcolor: 'transparent',
								fontSize: '0.95rem !important',
								fontWeight: '500 !important',
								cursor: 'pointer',
								borderRadius: '4px',
								transition: 'all 0.2s ease-in',
								'&:hover': {
									bgcolor: 'var(--color-chip-bg-default) !important',
								},
								'&:focus': {
									bgcolor: 'var(--color-chip-bg-default) !important',
								},
							}}
						/>
					</Tooltip>
				</InfoRow>
				<InfoRow label="Assigned To" variant={'body1'}>
					<Chip
						label={assignee.name}
						avatar={<Avatar alt={assignee.name} src={assignee.avatar} />}
						sx={{
							color: 'var(--color-text)',
							bgcolor: 'var(--color-page)',
							borderRadius: '4px',
							'& .MuiChip-label': {
								fontWeight: 500,
							},
						}}
					/>
				</InfoRow>
				<InfoRow label="Priority" variant={'body1'}>
					<Chip
						label={taskPriority}
						sx={{
							color: 'var(--color-chip-text-red)',
							bgcolor: 'var(--color-chip-bg-red)',
							borderRadius: '4px',
						}}
					/>
				</InfoRow>
				<InfoRow label="Status">
					<Chip
						label={taskStatus}
						sx={{
							color: 'var(--color-chip-text-yellow)',
							bgcolor: 'var(--color-chip-bg-yellow)',
							borderRadius: '4px',
						}}
					/>
				</InfoRow>
				<InfoRow label="Progress" variant={'body1'}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
							flexWrap: 'nowrap',
							width: '100%',
						}}>
						<Box
							sx={{
								flexGrow: 1,
								width: '100%',
								display: 'block',
								minWidth: 200,
							}}>
							<LinearProgress
								variant="determinate"
								value={taskProgress}
								sx={{
									display: 'block',
									width: '100%',
									height: 10,
									opacity: 0.6,
									borderRadius: '4px',
									backgroundColor: 'var(--color-border)',
									'& .MuiLinearProgress-bar': {
										backgroundColor: 'var(--color-primary)',
									},
								}}
							/>
						</Box>

						<Typography
							variant="body2"
							sx={{
								color: 'var(--color-text-muted)',
								fontWeight: 500,
								minWidth: '36px',
								textAlign: 'right',
							}}>
							{taskProgress} %
						</Typography>
					</Box>
				</InfoRow>
				<InfoRow label="Created By" variant={'body1'}>
					<Chip
						label={createdBy.name}
						avatar={<Avatar alt={createdBy.name} src={createdBy.avatar} />}
						sx={{
							color: 'var(--color-text)',
							bgcolor: 'var(--color-page)',
							borderRadius: '4px',
							'& .MuiChip-label': {
								fontSize: '0.85rem',
								fontWeight: 500,
							},
						}}
					/>
				</InfoRow>
			</div>
		</div>
	);
};

export default TaskOverview;
