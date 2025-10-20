import {createTheme} from '@mui/material/styles';

export const lightTheme = createTheme({
	typography: {fontFamily: `'Inter', sans-serif`},
	palette: {
		mode: 'light',
		primary: {
			main: '#f97316', // orange-500
			light: '#fb923c',
			dark: '#ea580c',
		},
		background: {
			default: '#f8fafc', // --color-page
			paper: '#ffffff', // --color-card
		},
		text: {
			primary: '#181818',
			secondary: '#64748b', // slate-500
		},
		divider: '#e5e7eb', // --color-border
		success: {main: '#10b981'},
		warning: {main: '#f59e0b'},
		error: {main: '#dc2626'},
	},
});

export const darkTheme = createTheme({
	typography: {fontFamily: `'Inter', sans-serif`},
	palette: {
		mode: 'dark',
		primary: {
			main: '#fb923c', // orange-400
			light: '#fdba74',
			dark: '#f97316',
		},
		background: {
			default: '#212121', // --color-page
			paper: '#2F2F2F', // --color-card
		},
		text: {
			primary: '#F4F4F5', // neutral-100
			secondary: '#A1A1AA', // neutral-400
		},
		divider: '#2d2d2f', // --color-border
		success: {main: '#34d399'},
		warning: {main: '#fbbf24'},
		error: {main: '#ef4444'},
	},
});
