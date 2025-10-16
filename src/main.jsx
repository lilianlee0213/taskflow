import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: `'Inter', sans-serif`, // Tailwind와 동일한 폰트
	},
});
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
