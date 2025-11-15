import React from 'react';
import {Box, Typography, Avatar, Stack} from '@mui/material';
import {
	AddCircleOutline,
	DeleteOutline,
	Sync,
	ChatBubbleOutline,
	UploadFile,
} from '@mui/icons-material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function ActivityItem({log}) {
	const eventTime = log?.createdAt;
	const formattedTime = dayjs(eventTime).fromNow();

	const typeIcons = {
		create: <AddCircleOutline sx={{color: '#10b981', fontSize: 20}} />,
		add: <AddCircleOutline sx={{color: '#10b981', fontSize: 20}} />,
		update: <Sync sx={{color: '#2196f3', fontSize: 20}} />,
		comment: <ChatBubbleOutline sx={{color: '#9c27b0', fontSize: 20}} />,
		delete: <DeleteOutline sx={{color: '#ef4444', fontSize: 20}} />,
		file: <UploadFile sx={{color: '#f59e0b', fontSize: 20}} />,
	};

	return (
		<Box sx={{display: 'flex', alignItems: 'flex-start', gap: 2}}>
			{/* 왼쪽: 타입 아이콘 */}
			<Box sx={{mt: 0.5}}>{typeIcons[log.action]}</Box>

			{/* 오른쪽: 시간, 이름+아바타, 내용, 코멘트 */}
			<Box>
				{/* 날짜/시간 */}
				<Typography
					variant="caption"
					sx={{color: 'var(--color-text-muted)', display: 'block', mb: 0.5}}>
					{formattedTime}
				</Typography>

				{/* 이름 + 아바타 + 액션 */}
				<Stack direction="row" alignItems="center" spacing={1}>
					<Avatar
						src={log.actor.avatar}
						alt={log.actor.name}
						sx={{
							width: 28,
							height: 28,
							fontSize: '0.8rem',
							bgcolor: 'var(--color-chip-bg-yellow)',
							color: 'var(--color-chip-text-yellow)',
						}}>
						{!log.actor.avatar && log.actor.name}
					</Avatar>

					<Typography
						variant="body2"
						sx={{
							color: 'var(--color-text)',
							fontWeight: 500,
							lineHeight: 1.6,
						}}>
						{log.actor.name} {log.content}
					</Typography>
				</Stack>

				{/* 코멘트나 서브 내용 */}
				{/* {log.content && (
					<Typography
						variant="body2"
						sx={{
							mt: 0.5,
							color: 'var(--color-text-muted)',
							fontStyle: 'italic',
						}}>
						“{log.content}”
					</Typography>
				)} */}
			</Box>
		</Box>
	);
}
