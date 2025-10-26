import React from 'react';
import {Box, Typography, TextField} from '@mui/material';
import CustomTabs from '../../components/ui/CustomTabs';
import ActivityTimeline from '../../components/ui/ActivityTimeline/ActivityTimeline';
import CommentSection from '../../components/ui/CommentSection';

export default function ProjectDetails() {
	const comments = [
		{
			user: {name: 'John Smith', avatar: '/static/images/avatar/1.jpg'},
			text: 'Hi 👋 I’ll do that task now, you can start working on another task!',
			createdAt: '2024-02-17T12:45:00.000Z',
		},
		{
			user: {name: 'John Smith', avatar: '/static/images/avatar/1.jpg'},
			text: 'Hello!',
			createdAt: '2024-02-17T13:15:00.000Z',
		},
	];
	const activityLogs = [
		{
			id: '1',
			action: 'create',
			type: 'project',
			targetName: 'Marketing Website Revamp',
			user: {name: 'Lilian Lee', avatar: '/static/images/avatar/1.jpg'},
			createdAt: '2025-10-23T09:12:00.000Z',
			updatedAt: '2025-10-23T09:12:00.000Z',
		},
		{
			id: '2',
			action: 'update',
			type: 'status',
			targetName: 'In Progress',
			user: {name: 'Alex Kim', avatar: '/static/images/avatar/2.jpg'},
			createdAt: '2025-10-23T09:12:00.000Z',
			updatedAt: '2025-10-23T09:45:00.000Z',
		},
		{
			id: '3',
			action: 'comment',
			type: 'project',
			targetName: 'Marketing Website Revamp',
			user: {name: 'Alex Kim', avatar: '/static/images/avatar/2.jpg'},
			content: 'Let’s review this with the marketing team.',
			createdAt: '2025-10-23T09:12:00.000Z',
			updatedAt: '2025-10-23T11:03:00.000Z',
		},
	];

	const tabs = [
		{
			label: 'Description',
			content: (
				<div className="w-full bg-page">
					<TextField
						fullWidth
						multiline
						rows={5}
						variant="filled"
						sx={{
							'& .MuiFilledInput-root': {
								backgroundColor: 'transparent',
								borderRadius: '4px',
								borderBottom: 'none',
								// margin: 0,
								padding: '16px 16px !important',
								minHeight: 4,
								overflow: 'hidden',
								'&:before, &:after': {
									display: 'none',
								},
								'&:hover:before': {
									display: 'none',
								},
							},
							// '& .MuiInputBase-input': {
							// 	padding: '0 !important', // ← 여기가 실제 내부 텍스트 padding
							// },
						}}
						value="This project revamps the company website to align with the new brand guidelines and improve analytics integration for marketing insights."
					/>
				</div>
			),
		},
		{
			label: 'Comments',
			content: <CommentSection comments={comments} />,
		},
		{
			label: 'Activity Log',
			content: <ActivityTimeline logs={activityLogs} />,
		},
	];

	return (
		<div className="px-8 mb-4">
			<CustomTabs tabs={tabs} />
		</div>
	);
}
