import React from 'react';

import {
	Avatar,
	AvatarGroup,
	Box,
	Chip,
	CircularProgress,
	LinearProgress,
	Tooltip,
	Typography,
} from '@mui/material';
import InfoRow from '../../components/ui/InfoRow';
import dayjs from 'dayjs';

function CircularProgressWithLabel({value, size = 30, thickness = 3}) {
	return (
		<Box sx={{position: 'relative', display: 'inline-flex'}}>
			{/* 배경 트랙 */}
			<CircularProgress
				variant="determinate"
				value={100}
				size={size}
				thickness={thickness}
				sx={{
					color: 'var(--color-border)', // 안 채워진 부분 색
					position: 'absolute',
					left: 0,
				}}
			/>

			{/* 실제 프로그레스 */}
			<CircularProgress
				variant="determinate"
				value={value}
				size={size}
				thickness={thickness}
				sx={{
					color: 'var(--color-primary)', // 채워지는 부분 색
				}}
			/>

			{/* 텍스트 */}
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Typography
					variant="caption"
					sx={{fontSize: '12px !important'}}>{`${Math.round(
					value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

const ProjectInfoPanel = ({
	name,
	team,
	status,
	due,
	assignees,
	createdBy,
	progress,
}) => {
	const dueDate = dayjs(due).format('MMMM DD, YYYY') || null;
	return (
		<div className="w-full flex flex-col gap-4 mb-8">
			<div className="flex-grow flex-1 mt-14 mb-2">
				<Chip
					label={name}
					sx={{
						width: '100%',
						color: 'var(--color-chip-text-default)',
						bgcolor: 'var(--color-chip-bg-default)',
						borderRadius: '4px',
						fontWeight: 700,
						textTransform: 'Uppercase',
						fontSize: '14px',
					}}
				/>
			</div>
			<InfoRow label="Team" varient={'body2'}>
				<Typography
					sx={{
						color: 'var(--color-text) !important',
						fontSize: '0.85rem !important',
						fontWeight: '500 !important',
					}}>
					{team}
				</Typography>
			</InfoRow>
			<InfoRow label="Assignees" varient={'body2'}>
				<AvatarGroup
					max={4}
					sx={{justifyContent: 'center'}}
					slotProps={{
						additionalAvatar: {
							sx: {width: 28, height: 28, fontSize: '0.75rem', fontWeight: 600},
						},
					}}>
					{assignees.map((user, index) => (
						<Tooltip key={index} title={user.name}>
							<Avatar
								src={user.avatar}
								sx={{width: 28, height: 28, fontSize: 13}}>
								{user.name[0]}
							</Avatar>
						</Tooltip>
					))}
				</AvatarGroup>
			</InfoRow>
			<InfoRow label="Status" varient={'body2'}>
				<Chip
					label={status}
					color="yellow"
					sx={{
						color: 'var(--color-chip-text-yellow)',
						bgcolor: 'var(--color-chip-bg-yellow)',
						borderRadius: '4px',
					}}
				/>
			</InfoRow>
			<InfoRow label="Progress" varient={'body2'}>
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
						<CircularProgressWithLabel value={progress} />
					</Box>

					<Typography
						variant="body2"
						sx={{
							color: 'var(--color-text-muted)',
							fontWeight: 500,
							minWidth: '36px',
							textAlign: 'right',
						}}>
						{progress} %
					</Typography>
				</Box>
			</InfoRow>

			<InfoRow label="Due Date" varient={'body2'}>
				<Typography
					sx={{
						color: 'var(--color-text) !important',
						fontSize: '0.85rem !important',
						fontWeight: '500 !important',
					}}>
					{dueDate}
				</Typography>
			</InfoRow>

			<InfoRow label="Created By" varient={'body2'}>
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
	);
};

export default ProjectInfoPanel;
