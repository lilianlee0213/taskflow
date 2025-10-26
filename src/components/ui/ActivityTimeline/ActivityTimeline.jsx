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
	if (!logs.length) {
		return (
			<Typography
				variant="body2"
				sx={{color: 'var(--color-text-muted)', fontStyle: 'italic'}}>
				No activity yet.
			</Typography>
		);
	}

	return (
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
				<Step key={log.id || index} expanded>
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
	);
}
