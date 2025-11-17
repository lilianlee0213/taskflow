import React, {useState} from 'react';
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
	LinearProgress,
	Box,
} from '@mui/material';
import dayjs from 'dayjs';
import InfoRow from '../../components/ui/InfoRow';
const ProjectOverview = ({project}) => {
	if (!project) return null;
	const {
		projectName,
		projectLabel,
		assignees,
		projectStatus,
		projectProgress,
		projectDueDate,
		createdBy,
	} = project;
	const dueDate = dayjs(projectDueDate).format('MMMM DD, YYYY');
	return (
		<div className="px-8">
			<Typography variant="h2" sx={{fontWeight: 600, mb: 4}}>
				{projectName}
			</Typography>
			<div className="w-full flex flex-col gap-4 mb-8">
				<InfoRow label="Label" showAddIcon varient={'body1'}>
					{projectLabel.map((label, i) => (
						<Chip
							key={i}
							label={label}
							sx={{
								color: 'var(--color-chip-text-blue)',
								bgcolor: 'var(--color-chip-bg-blue)',
								borderRadius: '4px',
							}}
						/>
					))}
					{/* <Chip
						label="Design"
						sx={{
							color: 'var(--color-chip-text-blue)',
							bgcolor: 'var(--color-chip-bg-blue)',
							borderRadius: '4px',
						}}
					/> */}

					{/* <Chip
						label="Development"
						sx={{
							color: 'var(--color-chip-text-green)',
							bgcolor: 'var(--color-chip-bg-green)',
							borderRadius: '4px',
						}}
					/>

					<Chip
						label="Marketing"
						sx={{
							color: 'var(--color-chip-text-indigo)',
							bgcolor: 'var(--color-chip-bg-indigo)',
							borderRadius: '4px',
						}}
					/>
					<Chip
						label="Research"
						sx={{
							color: 'var(--color-chip-text-red)',
							bgcolor: 'var(--color-chip-bg-red)',
							borderRadius: '4px',
						}}
					/> */}
				</InfoRow>
				<InfoRow label="Assigned To" showAddIcon varient={'body1'}>
					{assignees.map((user, i) =>
						user ? (
							<Chip
								key={i}
								label={user.name}
								avatar={<Avatar alt={user.name} src={user.avatar} />}
								sx={{
									color: 'var(--color-text)',
									bgcolor: 'var(--color-page)',
									borderRadius: '4px',
									'& .MuiChip-label': {
										fontWeight: 500,
									},
								}}
							/>
						) : null
					)}
				</InfoRow>
				<InfoRow label="Status" varient={'body1'}>
					<Chip
						label={projectStatus}
						sx={{
							color: 'var(--color-chip-text-yellow)',
							bgcolor: 'var(--color-chip-bg-yellow)',
							borderRadius: '4px',
						}}
					/>
				</InfoRow>
				<InfoRow label="Progress" varient={'body1'}>
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
								value={projectProgress}
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
							{projectProgress} %
						</Typography>
					</Box>
				</InfoRow>

				<InfoRow label="Due Date" varient={'body1'}>
					<Typography
						sx={{
							color: 'var(--color-text) !important',
							fontSize: '0.95rem !important',
							fontWeight: '500 !important',
						}}>
						{dueDate}
					</Typography>
				</InfoRow>
				<InfoRow label="Created By">
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

export default ProjectOverview;
