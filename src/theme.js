import {createTheme} from '@mui/material/styles';

// ✅ 공통 타이포그래피 설정
const baseTypography = {
	fontFamily: "'Inter', sans-serif",

	// === Headings ===
	h1: {
		fontSize: '1.9rem',
		'@media (min-width:768px)': {fontSize: '2.2rem'},
		'@media (min-width:1200px)': {fontSize: '2.5rem'},
	},
	h2: {
		fontSize: '1.75rem',
		'@media (min-width:768px)': {fontSize: '2.05rem'},
		'@media (min-width:1200px)': {fontSize: '2.25rem'},
	},
	h3: {
		fontSize: '1.3rem',
		'@media (min-width:768px)': {fontSize: '1.5rem'},
		'@media (min-width:1200px)': {fontSize: '1.65rem'},
	},
	h4: {
		fontWeight: 700,
		fontSize: '1.1rem',
		'@media (min-width:768px)': {fontSize: '1.25rem'},
		'@media (min-width:1200px)': {fontSize: '1.35rem'},
	},
	h5: {
		fontSize: '1rem',
		'@media (min-width:768px)': {fontSize: '1.05rem'},
		'@media (min-width:1200px)': {fontSize: '1.15rem'},
	},
	h6: {
		fontSize: '0.9rem',
		'@media (min-width:768px)': {fontSize: '0.95rem'},
		'@media (min-width:1200px)': {fontSize: '1rem'},
	},

	// === Body Text ===
	body1: {
		fontSize: '0.95rem',
		lineHeight: 1.6,
		'@media (min-width:768px)': {fontSize: '1rem'},
		'@media (min-width:1200px)': {fontSize: '1.05rem'},
	},
	body2: {
		fontSize: '0.875rem',
		lineHeight: 1.55,
		'@media (min-width:768px)': {fontSize: '0.9rem'},
		'@media (min-width:1200px)': {fontSize: '0.95rem'},
	},

	// === Small Text ===
	caption: {
		fontSize: '0.75rem',
		lineHeight: 1.4,
		'@media (min-width:768px)': {fontSize: '0.8rem'},
		'@media (min-width:1200px)': {fontSize: '0.85rem'},
	},
	overline: {
		fontSize: '0.7rem',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		lineHeight: 1.4,
	},
};

// ✅ 공통 InputLabel 스타일
const inputOverrides = {
	MuiInputLabel: {
		styleOverrides: {
			root: {
				fontSize: '0.85rem',
				'@media (min-width:768px)': {fontSize: '0.9rem'},
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			input: {
				fontSize: '0.9rem', // 입력 텍스트 (~14.4px)
				'@media (min-width:768px)': {fontSize: '0.95rem'},
				'&::placeholder': {
					fontSize: '0.9rem', // placeholder는 label보다 살짝 큼 (~13px)
					color: 'var(--color-placeholder)',
					opacity: 1,
				},
			},
		},
	},
};

const buttonOverrides = {
	MuiButton: {
		styleOverrides: {
			root: {
				fontSize: '0.8rem',
				padding: '4px 10px',
				'@media (min-width:768px)': {
					fontSize: '0.82rem',
					padding: '5px 12px',
				},

				// 💻 랩탑/데스크탑 (1200px 이상)
				'@media (min-width:1200px)': {
					fontSize: '0.88rem',
					padding: '6px 14px',
				},
				'@media (min-width:1400px)': {
					fontSize: '0.95rem',
					padding: '7px 18px',
				},
			},
		},
	},
};
// ✅ 라이트 테마
export const lightTheme = createTheme({
	typography: baseTypography,
	palette: {
		mode: 'light',
		primary: {main: '#f97316', light: '#fb923c', dark: '#ea580c'},
		background: {default: '#f8fafc', paper: '#ffffff'},
		text: {primary: '#181818', secondary: '#64748b'},
		divider: '#e5e7eb',
		success: {main: '#10b981'},
		warning: {main: '#f59e0b'},
		error: {main: '#dc2626'},
		info: {main: '#1769aa'},
	},
	components: {...inputOverrides, ...buttonOverrides},
});

// ✅ 다크 테마
export const darkTheme = createTheme({
	typography: baseTypography,
	palette: {
		mode: 'dark',
		primary: {main: '#fb923c', light: '#fdba74', dark: '#f97316'},
		background: {default: '#212121', paper: '#2F2F2F'},
		text: {primary: '#F4F4F5', secondary: '#A1A1AA'},
		divider: '#2d2d2f',
		success: {main: '#34d399'},
		warning: {main: '#fbbf24'},
		error: {main: '#ef4444'},
		info: {main: '#2196F3'},
	},
	components: {...inputOverrides, ...buttonOverrides},
});
