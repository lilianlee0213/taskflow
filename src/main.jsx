import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ToastProvider from './components/ui/ToastProvider.jsx';
import AuthProvider from './components/auth/AuthProvider.jsx';

const theme = createTheme({
	typography: {
		fontFamily: `'Inter', sans-serif`, // Tailwind와 동일한 폰트
	},
	palette: {
		primary: {
			main: '#f97316', // var(--color-primary)
			light: '#fdba74', // var(--color-primary-light)
			dark: '#ea580c', // var(--color-primary-dark)
			contrastText: '#fff',
		},
	},
});
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ToastProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ToastProvider>
		</ThemeProvider>
	</StrictMode>
);
