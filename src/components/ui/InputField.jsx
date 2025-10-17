import React, {useState} from 'react';
import {Box, InputBase, IconButton} from '@mui/material';
import {
	MagnifyingGlassIcon,
	EnvelopeIcon,
	LockClosedIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline';

/**
 * InputField (통합 컴포넌트)
 *
 * props:
 * - type: "text" | "email" | "password" | "search"
 * - placeholder: string
 * - value: string
 * - onChange: function
 * - icon: JSX.Element (optional)  → 아이콘 덮어쓰기 가능
 * - fullWidth: boolean
 * - disabled: boolean
 * - error: boolean
 * - helperText: string
 */
const InputField = ({
	id = '',
	type = 'text',
	placeholder = '',
	value,
	onChange,
	icon: customIcon = null,
	fullWidth = true,
	disabled = false,
	error = false,
	helperText = '',
	...props
}) => {
	const [showPw, setShowPw] = useState(false);

	// 기본 아이콘 매핑
	const renderIcon = () => {
		if (customIcon) return customIcon;
		switch (type) {
			case 'search':
				return <MagnifyingGlassIcon className="h-6 w-6 opacity-70 mb-0.5" />;
			case 'email':
				return <EnvelopeIcon className="h-6 w-6 opacity-70" />;
			case 'password':
				return <LockClosedIcon className="h-6 w-6 opacity-70" />;
			default:
				return null;
		}
	};

	const endAdornment =
		type === 'password' ? (
			<IconButton
				onClick={() => setShowPw((prev) => !prev)}
				edge="end"
				size="small"
				sx={{color: 'inherit'}}>
				{showPw ? (
					<EyeSlashIcon className="h-5 w-5 opacity-70" />
				) : (
					<EyeIcon className="h-5 w-5 opacity-70" />
				)}
			</IconButton>
		) : null;

	// 상태별 색상 (Tailwind 변수 기반)
	const borderColor = error
		? 'var(--color-error, #dc2626)' // red-600 fallback
		: 'rgba(100,116,139,0.25)'; // slate-400 default

	const hoverBorderColor = error
		? 'var(--color-error, #dc2626)'
		: 'var(--color-secondary, #fdba74)';

	const focusBorderColor = error
		? 'var(--color-error, #dc2626)'
		: 'var(--color-secondary, #f97316)';

	const disabledBg = 'rgba(241,245,249,0.5)'; // slate-100 with opacity

	return (
		<Box sx={{width: fullWidth ? '100%' : 'auto'}}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 1,
					py: 1,
					borderBottom: `1px solid ${
						type === 'search' ? 'transparent' : borderColor
					}`,
					bgcolor: disabled ? disabledBg : 'transparent',
					color: disabled
						? 'rgba(148,163,184,0.8)' // slate-400
						: 'var(--color-sidebar-text)',
					transition: 'all 0.2s ease',
					'&:hover': {
						borderColor: hoverBorderColor,
					},
					'&:focus-within': {
						borderColor: focusBorderColor,
					},
					opacity: disabled ? 0.7 : 1,
				}}
				{...props}>
				{renderIcon()}
				<InputBase
					fullWidth
					disabled={disabled}
					id={id}
					type={type === 'password' && !showPw ? 'password' : 'text'}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					sx={{
						color: 'inherit',
						'& input::placeholder': {
							opacity: 0.6,
						},
						fontSize: '0.95rem',
					}}
				/>
				{endAdornment}
			</Box>
		</Box>
	);
};

export default InputField;
