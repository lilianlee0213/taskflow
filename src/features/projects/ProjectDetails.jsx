import React from 'react';
import {Box, Typography, TextField} from '@mui/material';
import CustomTabs from '../../components/ui/CustomTabs';
import ActivityTimeline from '../../components/ui/ActivityTimeline/ActivityTimeline';
import CommentSection from '../../components/ui/CommentSection';

export default function ProjectDetails({project}) {
	if (!project) return null;

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
						value={project.description}
					/>
				</div>
			),
		},
		{
			label: 'Comments',
			content: <CommentSection comments={project.comments} />,
		},
		{
			label: 'Activity Log',
			content: <ActivityTimeline logs={project.activityLogs} />,
		},
	];

	return (
		<div className="px-8 mb-4">
			<CustomTabs tabs={tabs} />
		</div>
	);
}
