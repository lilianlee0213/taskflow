import React from 'react';
import CustomTabs from '../../components/ui/CustomTabs';
import CommentSection from '../../components/ui/CommentSection';
import ActivityTimeline from '../../components/ui/ActivityTimeline/ActivityTimeline';
import {TextField} from '@mui/material';

const TaskDetails = ({task}) => {
	if (!task) return null;
	const {taskDescription, comments, activityLogs} = task;
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
						}}
						value={taskDescription}
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
};

export default TaskDetails;
