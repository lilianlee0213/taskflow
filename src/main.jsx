// src/main.jsx
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

const applyTheme = (forceDark) => {
	const root = document.documentElement;
	const useDark =
		typeof forceDark === 'boolean'
			? forceDark
			: savedTheme === 'dark' || (!savedTheme && prefersDark.matches);

	if (useDark) {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
		if (!root.classList.length) root.removeAttribute('class');
	}
};

// ✅ 초기 적용
applyTheme();

import {StrictMode, useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {lightTheme, darkTheme} from './theme';
import ToastProvider from './components/ui/ToastProvider.jsx';
import AuthProvider from './components/auth/AuthProvider.jsx';
import App from './App.jsx';
import './index.css';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import {fetchAuthSession} from 'aws-amplify/auth';
import {DataStore} from '@aws-amplify/datastore';
import {Project} from './models/index.js';
import {generateClient} from 'aws-amplify/api';
import {listTeams, listUsers} from './graphql/queries';

Amplify.configure({
	...awsExports,
	DataStore: {
		authModeStrategyType: 'MULTI_AUTH', // 여러 모드 병용 허용
	},
});

function ThemedApp() {
	const [isDark, setIsDark] = useState(
		document.documentElement.classList.contains('dark')
	);

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setIsDark(document.documentElement.classList.contains('dark'));
		});
		observer.observe(document.documentElement, {attributes: true});

		const handleSystemChange = (e) => {
			if (!localStorage.getItem('theme')) {
				applyTheme(e.matches);
				setIsDark(e.matches);
			}
		};
		prefersDark.addEventListener('change', handleSystemChange);

		return () => {
			observer.disconnect();
			prefersDark.removeEventListener('change', handleSystemChange);
		};
	}, []);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			<ToastProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ToastProvider>
		</ThemeProvider>
	);
}

const rootElement = document.getElementById('root');
let root = rootElement._reactRootContainer;

if (!root) {
	root = createRoot(rootElement);
}

root.render(
	<StrictMode>
		<ThemedApp />
	</StrictMode>
);
