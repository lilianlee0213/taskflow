import React from 'react';

const Settings = ({darkMode, setDarkMode}) => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Settings</h2>
			<div className="flex items-center gap-4">
				<span>Dark Mode:</span>
				<button
					onClick={() => setDarkMode((prev) => !prev)}
					className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded">
					{darkMode ? 'Disable' : 'Enable'}
				</button>
			</div>
		</div>
	);
};
export default Settings;
