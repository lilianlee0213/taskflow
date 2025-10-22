import React from 'react';
import PageComponent from '../components/PageComponent';

const TimeLogs = () => {
	return (
		<PageComponent
			title="Time Logs"
			content={<p>This is the time log page content.</p>}
			headerTitle={'All logs'}
		/>
	);
};

export default TimeLogs;
