import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../components/auth/AuthProvider.jsx';
import {useToast} from '../components/ui/ToastProvider.jsx';
import {useEffect, useRef, useState} from 'react';
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
	Tooltip,
} from '@mui/material';
import InputField from '../components/ui/InputField.jsx';
import FormLabelText from '../components/ui/FromLabelText.jsx';

import {Amplify} from 'aws-amplify';
import awsExports from '../aws-exports';
import {confirmSignIn, getCurrentUser, signIn} from 'aws-amplify/auth';

import video from '../assets/Taskflow.mp4';

Amplify.configure(awsExports);

export default function Login() {
	const {login} = useAuth();
	const {push} = useToast();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [isSignUp, setIsSignUp] = useState(false);
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [errorType, setErrorType] = useState('error'); // 'error', 'warning', 'info', 'success'

	const [signupEmail, setSignupEmail] = useState('');
	const [signupPw, setSignupPw] = useState('');
	const [signUpAlert, setSignUpAlert] = useState(false);

	const handleSignIn = async (e) => {
		e.preventDefault();

		if (!email || !pw) {
			setError(true);
			setErrorType('error');
			setErrorMessage('Please enter both your email and password.');
			return;
		}

		try {
			// 1️⃣ 로그인 시도
			const {isSignedIn, nextStep} = await signIn({
				username: email,
				password: pw,
			});

			if (!isSignedIn) {
				console.warn('⚠️ Login not complete:', nextStep);
				setError(true);
				setErrorMessage('Login not complete. Check MFA or verification steps.');
				return;
			}

			// 2️⃣ 로그인된 유저 정보 가져오기
			const currentUser = await getCurrentUser();

			console.log('✅ Signed in:', currentUser.signInDetails.loginId);

			login(currentUser); // ← 여기에 Cognito 유저 전달
			push(`Signed in as ${currentUser.signInDetails.loginId}`, 'success');
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

	const handleToggle = () => {
		setIsSignUp((prev) => {
			const newState = !prev;

			setTimeout(() => {
				if (newState) {
					// 로그인 → 회원가입
					setEmail('');
					setPw('');
					setError(false);
					setErrorMessage('');
				} else {
					// 회원가입 → 로그인
					setSignupEmail('');
					setSignupPw('');
					setSignUpAlert(false);
				}
			}, 400); // 👈 transition duration에

			return newState;
		});
	};

	return (
		<div className="flex w-full h-screen">
			<div className="relative w-3/5 text-white flex flex-col justify-center items-center p-12">
				<video
					src={video}
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				/>{' '}
				{/* <div>
					<Typography
						variant="h1"
						fontWeight={800}
						gutterBottom
						sx={{
							lineHeight: 1.2,
							fontSize: {md: '3rem', lg: '3.3rem', xl: '3.6ㅍrem'},
							fontWeight: 800,
						}}>
						A smarter way to manage projects.
					</Typography>

					<Typography
						variant="h4"
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
				</div> */}
			</div>

			<div className="relative w-2/5 h-full bg-page overflow-hidden">
				<div
					className={`absolute top-0 left-0 w-[200%] h-full flex transition-all duration-700 ease-[cubic-bezier(0.65,-0.25,0.25,1.25)] ${
						isSignUp
							? '-translate-x-1/2 opacity-100'
							: 'translate-x-0 opacity-100'
					}`}>
					{/* === LOGIN FORM === */}
					<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-14 bg-page">
						{' '}
						<Typography
							variant="h2"
							fontWeight={600}
							sx={{
								color: 'var(--color-text)',
								mb: 4,
							}}>
							Login
						</Typography>
						<form
							className="flex flex-col gap-8 lg:gap-10 w-full max-w-lg md:max-w-xl mx-auto"
							onSubmit={handleSignIn}>
							{error && (
								<Alert severity={errorType} className="bg-transparent">
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
							<div>
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
								{/* <Typography
									variant="caption"
									color="info"
									textAlign="right"
									sx={{
										display: 'block',
										mt: '.5rem',
										fontWeight: 500,
										cursor: 'pointer',
										transition: 'all 0.3s ease',
										'&:hover': {
											textDecoration: 'underline',
										},
									}}>
									Forgot Password?
								</Typography> */}
							</div>
							<div>
								<Button
									fullWidth
									variant="contained"
									type="submit"
									sx={{
										bgcolor: 'var(--color-primary)',
										color: '#fff',
										'&:hover': {bgcolor: 'var(--color-primary-dark)'},
										mb: 2,
									}}>
									Sign In
								</Button>
								<Button
									fullWidth
									type="button"
									variant="outlined"
									onClick={handleDemo}>
									Demo Login
								</Button>
							</div>
							<Typography
								variant="caption"
								sx={{
									opacity: 0.8,
									color: 'var(--color-text-muted)',
									textAlign: 'center',
								}}>
								Don’t have an account?{' '}
								<span
									onClick={handleToggle}
									className="text-[var(--color-primary)] font-semibold cursor-pointer hover:underline">
									Sign up
								</span>
							</Typography>
						</form>
					</div>

					{/* === SIGN UP FORM === */}
					<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-14 bg-page">
						<Typography
							variant="h2"
							fontWeight={600}
							sx={{
								color: 'var(--color-text)',
								mb: 4,
							}}>
							Sign Up
						</Typography>
						<form className="flex flex-col gap-8 lg:gap-10 w-full max-w-lg md:max-w-xl mx-auto">
							{signUpAlert && (
								<Alert className="bg-transparent" severity="info">
									Account creation is disabled in this demo. Please return to
									the{' '}
									<span
										onClick={() => setIsSignUp(false)}
										style={{
											textDecoration: 'underline',
											cursor: 'pointer',
											color: 'var(--color-info)',
											fontWeight: 600,
										}}>
										Login
									</span>{' '}
									page to continue.
								</Alert>
							)}
							<FormControl fullWidth>
								<FormLabelText htmlFor="signup_email">Email</FormLabelText>
								<InputField
									id="signup_email"
									type="email"
									placeholder="Email address"
									value={signupEmail}
									onChange={(e) => setSignupEmail(e.target.value)}
								/>
							</FormControl>
							<FormControl fullWidth>
								<FormLabelText htmlFor="signup-pw">Password</FormLabelText>
								<InputField
									id="signup-pw"
									type="password"
									placeholder="Password"
									value={signupPw}
									onChange={(e) => setSignupPw(e.target.value)}
								/>
							</FormControl>
							<Button
								variant="contained"
								type="button"
								onClick={() => setSignUpAlert(true)}
								sx={{
									bgcolor: 'var(--color-primary)',
									color: '#fff',
									'&:hover': {bgcolor: 'var(--color-primary-dark)'},
									mt: 1,
								}}>
								Create Account
							</Button>

							<Typography
								variant="caption"
								sx={{
									opacity: 0.8,
									color: 'var(--color-text-muted)',
									textAlign: 'center',
								}}>
								Already have an account?{' '}
								<span
									onClick={handleToggle}
									className="text-[var(--color-primary)] font-semibold cursor-pointer hover:underline">
									Login
								</span>
							</Typography>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
