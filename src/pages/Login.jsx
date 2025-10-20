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
import loginBg from '../assets/login_bg.png';
import {
	Alert,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
} from '@mui/material';
import InputField from '../components/ui/InputField.jsx';
import FormLabelText from '../components/ui/FromLabelText.jsx';

import {Amplify} from 'aws-amplify';
import awsExports from '../aws-exports';
import {signIn} from 'aws-amplify/auth';

Amplify.configure(awsExports);

export default function Login() {
	const {login} = useAuth();
	const {push} = useToast();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [errorType, setErrorType] = useState('error'); // 'error', 'warning', 'info', 'success'

	const handleSignIn = async (e) => {
		e.preventDefault();

		if (!email || !pw) {
			setError(true);
			setErrorType('error');
			setErrorMessage('Please enter both your email and password.');
			return;
		}

		try {
			const user = await signIn({username: email, password: pw}); // Cognito login
			login(user);
			push(`Signed in as ${user.username}`, 'success');
			navigate(from, {replace: true});
			setError(false);
			setErrorMessage('');
			setErrorType('success');
		} catch (err) {
			console.error(err);
			switch (err.name) {
				case 'UserNotFoundException':
					setErrorMessage('No account found with this email');
					break;
				case 'NotAuthorizedException':
					setErrorMessage('Incorrect email or password');
					break;
				case 'InvalidParameterError':
					setErrorMessage('Please enter a valid email format');
					break;
				default:
					setErrorMessage('Unable to sign in. Please try again.');
			}
			setErrorType('error');
		}
	};

	const handleDemo = () => {
		login({email: 'demo@taskflow.app', role: 'demo'});
		push('Signed in as Demo', 'info');
		navigate(from, {replace: true});
	};

	return (
		<div className="flex w-full h-screen">
			<div
				className="w-3/5 text-white flex flex-col justify-center items-center p-12"
				style={{
					backgroundImage: `url(${loginBg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}>
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

			<div className="w-2/5 flex items-center justify-center bg-page p-12">
				<div className="flex flex-col gap-4">
					<Typography
						variant="h4"
						fontWeight={600}
						gutterBottom
						sx={{color: 'var(--color-text)'}}>
						Login
					</Typography>
					<form
						className="flex flex-col ml-1 gap-4 w-full max-w-sm mx-auto"
						onSubmit={handleSignIn}>
						{error && (
							<Alert
								severity={errorType}
								sx={{mx: 0}}
								className="bg-transparent">
								{errorMessage}
							</Alert>
						)}
						<FormControl fullWidth error={error}>
							<FormLabelText htmlFor="login-email">Email</FormLabelText>
							<InputField
								id="login-email"
								type="email"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								error={error}
							/>
						</FormControl>
						<FormControl fullWidth error={error}>
							<FormLabelText htmlFor="login-pw">Password</FormLabelText>
							<InputField
								id="login-pw"
								type="password"
								placeholder="Password"
								value={pw}
								onChange={(e) => setPw(e.target.value)}
								error={error}
							/>
						</FormControl>
						<Button
							variant="contained"
							type="submit"
							sx={{
								mt: 2,
								bgcolor: 'var(--color-primary)',
								color: '#fff',
								boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
								'&:hover': {
									bgcolor: 'var(--color-primary-dark)',
									boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
								},
								'&:active': {
									boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.25)',
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
							sx={{
								opacity: 0.8,
								color: 'var(--color-text-muted)',
								mt: 1.5,
							}}>
							Don’t have an account?{' '}
							<Typography
								component="span"
								variant="caption"
								sx={{
									fontWeight: 600,
									cursor: 'pointer',
									color: 'var(--color-primary)',
									'&:hover': {
										textDecoration: 'underline',
										color: 'var(--color-primary-dark)',
									},
								}}
								onClick={() => navigate('/signup')}>
								Sign up
							</Typography>
						</Typography>
					</form>
				</div>
			</div>
		</div>
	);
}
