import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../components/auth/AuthProvider.jsx';
import {useToast} from '../components/ui/ToastProvider.jsx';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {FormControl, Grid, InputLabel} from '@mui/material';
import InputField from '../components/ui/InputField.jsx';
import FormLabelText from '../components/ui/FromLabelText.jsx';

export default function Login() {
	const {login} = useAuth();
	const {push} = useToast();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [error, setError] = useState(false);

	const handleSignIn = () => {
		if (!email || !pw) return push('Enter email and password', 'warning');
		login({email, role: 'user'});
		push('Signed in', 'success');
		navigate(from, {replace: true});
	};

	const handleDemo = () => {
		login({email: 'demo@taskflow.app', role: 'demo'});
		push('Signed in as Demo', 'info');
		navigate(from, {replace: true});
	};

	return (
		<div className="flex w-full h-screen">
			<div className="w-3/5 bg-[var(--color-secondary)] text-white flex flex-col justify-center items-center p-12">
				<div>
					<Typography
						variant="h3"
						fontWeight={800}
						gutterBottom
						sx={{lineHeight: 1.2}}>
						A smarter way to manage projects.
					</Typography>

					<Typography
						variant="h6"
						sx={{
							opacity: 0.9,
							maxWidth: 720,
							mt: 2,
							lineHeight: 1.6,
							fontWeight: 400,
						}}>
						Built with <strong>AWS</strong> and <strong>React</strong>, TaskFlow
						helps teams plan, track, and deliver work faster — all in real time.
					</Typography>
				</div>
			</div>

			<div className="w-2/5 flex items-center justify-center bg-white p-12">
				<div className="flex flex-col gap-4">
					<Typography variant="h4" fontWeight={600} gutterBottom>
						Login
					</Typography>
					<form className="flex flex-col ml-1 gap-4 w-full max-w-sm mx-auto">
						<FormControl fullWidth error={error}>
							<FormLabelText htmlFor="login-email">Email</FormLabelText>
							<InputField
								id="login-email"
								type="email"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{error && <FormHelperText>Invalid email</FormHelperText>}
						</FormControl>
						<FormControl fullWidth error={error}>
							<FormLabelText htmlFor="login-pw">Password</FormLabelText>
							<InputField
								id="login-pw"
								type="password"
								placeholder="Password"
								value={pw}
								onChange={(e) => setPw(e.target.value)}
							/>
							{error && <FormHelperText>Incorrect password</FormHelperText>}
						</FormControl>
						<Button
							variant="contained"
							type="submit"
							sx={{
								mt: 2,
								bgcolor: 'var(--color-primary)',
								color: '#fff',
								boxShadow: '0 2px 4px rgba(0,0,0,0.15)', // ✅ subtle shadow
								'&:hover': {
									bgcolor: 'var(--color-primary-dark)',
									boxShadow: '0 3px 6px rgba(0,0,0,0.2)', // hover 시 살짝 깊게
								},
								'&:active': {
									boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.25)', // 클릭시 눌림 효과
								},
							}}>
							SIGN IN
						</Button>
						<Button
							fullWidth
							type="button"
							variant="outlined"
							onClick={handleDemo}>
							Demo Login
						</Button>

						<Typography
							variant="caption"
							color="text.secondary"
							sx={{opacity: 0.7}}>
							Demo는 실제 인증이 아닌 체험용입니다. (추후 Cognito로 교체)
						</Typography>
					</form>
				</div>
			</div>
		</div>
	);
}
