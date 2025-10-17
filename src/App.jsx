import {useEffect, useState} from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Tasks from './pages/Tasks';
import TimeLogs from './pages/TimeLogs';
import Team from './pages/Team';
import Settings from './pages/Settings';
import './index.css';
import ProtectedRoute from './components/auth/ProjectedRoute';
import logo from './assets/logo_square_light.png';
import {Typography} from '@mui/material';

function AppContent() {
	const [darkMode, setDarkMode] = useState(false);
	const location = useLocation(); // ✅ Router 내부에서만 쓸 수 있음!

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
	}, [darkMode]);

	const publicPages = ['/login', '/signup', '/forgot-password'];
	const isPublic = publicPages.includes(location.pathname);

	return (
		<div className="flex h-screen overflow-hidden">
			{!isPublic && <Sidebar darkMode={darkMode} />}
			<div className="flex flex-col flex-1">
				{!isPublic && <Topbar />}

				<main
					className={`${
						isPublic
							? 'w-full h-full flex items-center justify-center'
							: 'flex-1 overflow-auto p-6'
					}`}>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/projects"
							element={
								<ProtectedRoute>
									<Projects />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/projects/:id"
							element={
								<ProtectedRoute>
									<ProjectDetail />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/tasks"
							element={
								<ProtectedRoute>
									<Tasks />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/time-logs"
							element={
								<ProtectedRoute>
									<TimeLogs />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/team"
							element={
								<ProtectedRoute>
									<Team />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/settings"
							element={
								<ProtectedRoute>
									<Settings darkMode={darkMode} setDarkMode={setDarkMode} />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}
