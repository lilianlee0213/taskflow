import React from 'react';
import {
	Box,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material';
import ActivityItem from './ActivityItem';

export default function ActivityTimeline({logs = []}) {
	return (
		<Box sx={{px: 2}}>
			{!logs || logs.length === 0 ? (
				<Typography
					variant="body2"
					sx={{color: 'var(--color-text-muted)', fontStyle: 'italic'}}>
					No activity yet.
				</Typography>
			) : (
				<Stepper
					activeStep={-1}
					orientation="vertical"
					sx={{
						pl: 1,
						'& .MuiStepConnector-line': {
							minHeight: '28px',
							borderLeft: '2px solid var(--color-border)',
						},
					}}>
					{logs.map((log, index) => (
						<Step key={index} expanded>
							<StepLabel
								icon={null}
								sx={{
									alignItems: 'flex-start',
									'& .MuiStepLabel-iconContainer': {display: 'none'},
									'& .MuiStepLabel-labelContainer': {mt: '-2px'},
								}}>
								<ActivityItem log={log} />
							</StepLabel>
							<StepContent />
						</Step>
					))}
				</Stepper>
			)}
		</Box>
	);
}
