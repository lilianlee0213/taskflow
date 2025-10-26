import {Box, Tab, Tabs} from '@mui/material';
import {useEffect, useState} from 'react';

function CustomTabPanel({children, value, index}) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`custom-tabpanel-${index}`}
			aria-labelledby={`custom-tab-${index}`}>
			{value === index && <Box sx={{pt: 3}}>{children}</Box>}
		</div>
	);
}

export default function CustomTabs({tabs = [], defaultValue = 0, onChange}) {
	const [value, setValue] = useState(defaultValue ?? 0);

	useEffect(() => {
		if (value >= tabs.length) {
			setValue(0);
		}
	}, [tabs]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		if (onChange) onChange(newValue);
	};

	return (
		<Box sx={{width: '100%'}}>
			{/* 탭 헤더 */}
			<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
				<Tabs
					value={value}
					onChange={handleChange}
					textColor="var(--color-secondary)"
					indicatorColor="var(--color-secondary)"
					aria-label="custom tabs"
					sx={{
						'& .MuiTab-root': {
							textTransform: 'none',
							fontWeight: 600,
							minHeight: '44px',
							color: 'text.secondary',
						},
						'& .Mui-selected': {
							color: 'var(--color-secondary)',
						},
						'& .MuiTabs-indicator': {
							backgroundColor: 'var(--color-secondary)',
							height: '3px',
							borderRadius: '3px',
						},
					}}>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							label={tab.label}
							id={`custom-tab-${index}`}
							aria-controls={`custom-tabpanel-${index}`}
						/>
					))}
				</Tabs>
			</Box>

			{/* 탭 콘텐츠 */}
			{tabs.map((tab, index) => (
				<CustomTabPanel key={index} value={value} index={index}>
					{tab.content}
				</CustomTabPanel>
			))}
		</Box>
	);
}
