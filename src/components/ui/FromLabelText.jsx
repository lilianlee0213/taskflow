import {InputLabel} from '@mui/material';

export default function FormLabelText({htmlFor, children, sx = {}}) {
	return (
		<InputLabel
			htmlFor={htmlFor}
			shrink
			sx={{
				transform: 'none',
				position: 'static',
				mb: 0.5,
				color: 'var(--color-topbar-text)',
				fontWeight: 800,
				fontSize: '0.75rem',
				display: 'block',
				transition: 'color 0.2s ease',
				'&.Mui-focused': {
					color: 'var(--color-secondary)', // ✅ 포커스시 커스텀 색상
				},
				...sx,
			}}>
			{children}
		</InputLabel>
	);
}
