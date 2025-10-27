import {useState, useEffect} from 'react';
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
import Setting from './pages/Setting';
import ProtectedRoute from './components/auth/ProjectedRoute';
import './index.css';

function AppContent() {
	const [darkMode, setDarkMode] = useState(
		document.documentElement.classList.contains('dark')
	);
	const location = useLocation();

	useEffect(() => {
		const root = document.documentElement;

		if (darkMode) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
			if (!root.classList.length) root.removeAttribute('class');
		}

		const hasUserSetTheme = localStorage.getItem('theme') !== null;
		if (hasUserSetTheme) {
			localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		}
	}, [darkMode]);

	const publicPages = ['/login', '/signup', '/forgot-password'];
	const isPublic = publicPages.includes(location.pathname);

	return (
		<div className="flex h-screen overflow-hidden">
			{!isPublic && <Sidebar darkMode={darkMode} />}

			<main
				className={`bg-page flex flex-col flex-1 min-w-0 ${
					isPublic ? 'items-center justify-center' : 'p-8'
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
						path="/setting"
						element={
							<ProtectedRoute>
								<Setting darkMode={darkMode} setDarkMode={setDarkMode} />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</main>
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
