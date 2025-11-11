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
import Setting from './pages/Setting';
import ProtectedRoute from './components/auth/ProjectedRoute';
import './index.css';
import {DataStore} from '@aws-amplify/datastore';
import {Project, User, Team} from './models';

function AppContent() {
	const projects = [
		{
			projectName: 'TaskFlow Dashboard Redesign',
			description:
				'Update the dashboard UI for better task visibility and analytics.',
			projectLabel: ['UI', 'Frontend'],
			projectStatus: 'Active',
			projectProgress: 25,
			projectDueDate: '2025-12-20',
			teamName: 'Engineering',
			creatorEmail: 'emma.davis@taskflow.app',
		},
		{
			projectName: 'Marketing Campaign 2026 Launch',
			description:
				'Plan and execute Q1 marketing initiatives across all platforms.',
			projectLabel: ['Campaign', 'Marketing'],
			projectStatus: 'Planning',
			projectProgress: 5,
			projectDueDate: '2026-01-30',
			teamName: 'Marketing',
			creatorEmail: 'ava.thompson@taskflow.app',
		},
		{
			projectName: 'Internal Data Analysis Pipeline',
			description:
				'Develop automated ETL pipeline for internal reporting dashboard.',
			projectLabel: ['Data', 'Automation'],
			projectStatus: 'In Progress',
			projectProgress: 40,
			projectDueDate: '2026-03-15',
			teamName: 'Data',
			creatorEmail: 'michael.carter@taskflow.app',
		},
		{
			projectName: 'User Research & Testing Initiative',
			description:
				'Conduct usability studies and design validation for new features.',
			projectLabel: ['Research', 'UX'],
			projectStatus: 'Active',
			projectProgress: 60,
			projectDueDate: '2025-12-10',
			teamName: 'Design',
			creatorEmail: 'sophia.martin@taskflow.app',
		},
		{
			projectName: 'Operational Workflow Automation',
			description:
				'Automate recurring administrative processes for the Operations team.',
			projectLabel: ['Automation', 'Backend'],
			projectStatus: 'Active',
			projectProgress: 80,
			projectDueDate: '2025-11-30',
			teamName: 'Operations',
			creatorEmail: 'liliandev@taskflow.app',
		},
	];

	// 	useEffect(() => {
	//   const seedProjects = async () => {
	//     const existingProjects = await DataStore.query(Project);
	//     if (existingProjects.length > 0) {
	//       console.log("ℹ️ Projects already exist. Skipping seeding.");
	//       return;
	//     }

	//     console.log("🚀 Seeding Projects...");

	//     const allTeams = await DataStore.query(Team);
	//     const allUsers = await DataStore.query(User);

	//     for (const p of projects) {
	//       const team = allTeams.find((t) => t.name === p.teamName);
	//       const creator = allUsers.find((u) => u.email === p.creatorEmail);

	//       if (!team || !creator) {
	//         console.warn(`⚠️ Skipping project ${p.projectName}: missing team or creator`);
	//         continue;
	//       }

	//       await DataStore.save(
	//         new Project({
	//           projectName: p.projectName,
	//           description: p.description,
	//           projectLabel: p.projectLabel,
	//           projectStatus: p.projectStatus,
	//           projectProgress: p.projectProgress,
	//           projectDueDate: p.projectDueDate,
	//           teamID: team.id,
	//           creatorID: creator.id,
	//         })
	//       );

	//       console.log(`✅ Created: ${p.projectName} (Team: ${team.name})`);
	//     }

	//     console.log("🎉 All projects seeded successfully!");
	//   };

	//   seedProjects();
	// }, []);
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
