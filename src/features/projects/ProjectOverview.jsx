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
import {
	BookmarkIcon,
	PencilSquareIcon,
	PlusIcon,
} from '@heroicons/react/24/outline';
import {RiExpandDiagonal2Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import InfoRow from '../../components/ui/InfoRow';
const ProjectOverview = ({project}) => {
	if (!project) return null;
	return (
		<div className="px-8">
			<Typography variant="h2" sx={{fontWeight: 600, mb: 4}}>
				{project.projectName}
			</Typography>
			<div className="w-full flex flex-col gap-4 mb-8">
				<InfoRow label="Label" showAddIcon>
					{project.projectLabel.map((label, i) => (
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
				<InfoRow label="Assignees" showAddIcon>
					{project.assignees.map((user, i) =>
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
				<InfoRow label="Status">
					<Chip
						label={project.projectStatus}
						sx={{
							color: 'var(--color-chip-text-yellow)',
							bgcolor: 'var(--color-chip-bg-yellow)',
							borderRadius: '4px',
						}}
					/>
				</InfoRow>
				<InfoRow label="Progress">
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
							flexWrap: 'nowrap', // 💡 InfoRow의 flex-wrap 덮어쓰기
							width: '100%',
						}}>
						<Box
							sx={{
								flexGrow: 1,
								width: '100%',
								display: 'block',
								minWidth: 200, // 💡 fallback width, flex-wrap 방지용
							}}>
							<LinearProgress
								variant="determinate"
								value={project.projectProgress}
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
							{project.projectProgress} %
						</Typography>
					</Box>
				</InfoRow>

				<InfoRow label="Due Date">
					<Chip
						label="October 14, 2025"
						sx={{
							color: 'var(--color-text)',
							bgcolor: 'transparent',
							borderRadius: '4px',
							'& .MuiChip-label': {
								fontSize: '0.95rem',
								fontWeight: 500,
							},
						}}
					/>
				</InfoRow>
				<InfoRow label="Created By">
					<Chip
						label={`${project.createdBy.firstName} ${project.createdBy.lastName}`}
						avatar={
							<Avatar
								alt={`${project.createdBy.firstName} ${project.createdBy.lastName}`}
								src={project.createdBy.avatar}
							/>
						}
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
