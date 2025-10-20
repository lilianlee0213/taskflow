import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {DarkMode} from '@mui/icons-material';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
});
