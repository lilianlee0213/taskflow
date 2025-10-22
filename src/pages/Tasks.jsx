import React from 'react';
import PageComponent from '../components/PageComponent';

const Tasks = () => {
	return (
		<PageComponent
			title="Tasks"
			content={<p>This is the task page content.</p>}
			headerTitle={'All tasks'}
			// headerContent={<HeaderContent />}
		/>
	);
};

export default Tasks;
