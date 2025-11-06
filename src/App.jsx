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
	// 1️⃣ Team 데이터
	// const teams = [
	// 	{name: 'Operations', description: 'Handles admin and coordination'},
	// 	{name: 'Product', description: 'Product planning and management'},
	// 	{name: 'Engineering', description: 'Frontend and backend development'},
	// 	{name: 'Design', description: 'UI/UX design and branding'},
	// 	{name: 'Data', description: 'Data analytics and reporting'},
	// 	{name: 'Research', description: 'Research and experimentation'},
	// 	{name: 'Marketing', description: 'Campaigns and content strategy'},
	// ];

	// useEffect(() => {
	// 	const seedUsers = async () => {
	// 		console.log('🚀 Starting User seeding...');

	// 		// await DataStore.clear(); // ✅ 로컬 DB 완전히 초기화
	// 		await DataStore.start(); // ✅ 초기화 후 DataStore 다시 시작

	// 		// ✅ 2️⃣ 이미 존재하는 팀 조회
	// 		const allTeams = await DataStore.query(Team);
	// 		console.log('📦 Teams in DataStore:', allTeams);

	// 		if (allTeams.length === 0) {
	// 			console.error(
	// 				'❌ No teams found. Make sure Team data exists before seeding users.'
	// 			);
	// 			return;
	// 		}

	// 		const existingUsers = await DataStore.query(User);
	// 		if (existingUsers.length > 0) {
	// 			console.log('ℹ️ Users already exist, skipping seed.');
	// 			return;
	// 		}

	// 		// ✅ 4️⃣ 유저 데이터 목록
	// 		const users = [
	// 			{
	// 				cognitoId: '84682498-50f1-7067-6aab-aae26395748b',
	// 				firstName: 'Lilian',
	// 				lastName: 'Lee',
	// 				email: 'liliandev@taskflow.app',
	// 				role: 'Admin',
	// 				title: 'Head of Product',
	// 				teamID: 'Operations',
	// 				avatar: 'https://i.pravatar.cc/150?img=1',
	// 			},
	// 			{
	// 				cognitoId: '9e2e4aa8-3d41-7a12-8dbf-cc01fa234a7e',
	// 				firstName: 'Alex',
	// 				lastName: 'Johnson',
	// 				email: 'alex.johnson@taskflow.app',
	// 				role: 'Manager',
	// 				title: 'Product Manager',
	// 				teamID: 'Product',
	// 				avatar: 'https://i.pravatar.cc/150?img=2',
	// 			},
	// 			{
	// 				cognitoId: 'd53e02aa-4c56-8b74-9ee4-e4dbb8cc443a',
	// 				firstName: 'Emma',
	// 				lastName: 'Davis',
	// 				email: 'emma.davis@taskflow.app',
	// 				role: 'Manager',
	// 				title: 'Engineering Lead',
	// 				teamID: 'Engineering',
	// 				avatar: 'https://i.pravatar.cc/150?img=3',
	// 			},
	// 			{
	// 				cognitoId: 'b124a4c8-4e8b-9320-b74e-c25bdb9936ad',
	// 				firstName: 'Michael',
	// 				lastName: 'Carter',
	// 				email: 'michael.carter@taskflow.app',
	// 				role: 'Analyst',
	// 				title: 'Data Analyst',
	// 				teamID: 'Data',
	// 				avatar: 'https://i.pravatar.cc/150?img=4',
	// 			},
	// 			{
	// 				cognitoId: 'a66c5b3f-12e7-8d2a-91ae-bc1d1b03c0e9',
	// 				firstName: 'Sophia',
	// 				lastName: 'Martin',
	// 				email: 'sophia.martin@taskflow.app',
	// 				role: 'Member',
	// 				title: 'UI/UX Designer',
	// 				teamID: 'Design',
	// 				avatar: 'https://i.pravatar.cc/150?img=5',
	// 			},
	// 			{
	// 				cognitoId: 'e11c79c5-14b1-8873-9e22-d7db6fa449ae',
	// 				firstName: 'James',
	// 				lastName: 'Wilson',
	// 				email: 'james.wilson@taskflow.app',
	// 				role: 'Member',
	// 				title: 'Frontend Developer',
	// 				teamID: 'Engineering',
	// 				avatar: 'https://i.pravatar.cc/150?img=6',
	// 			},
	// 			{
	// 				cognitoId: 'd54f8b71-49a3-9942-8db2-dc56b893fa9d',
	// 				firstName: 'Olivia',
	// 				lastName: 'Brown',
	// 				email: 'olivia.brown@taskflow.app',
	// 				role: 'Member',
	// 				title: 'Backend Developer',
	// 				teamID: 'Engineering',
	// 				avatar: 'https://i.pravatar.cc/150?img=7',
	// 			},
	// 			{
	// 				cognitoId: 'f81b00e4-97a2-8369-81a8-ecb184b14ee9',
	// 				firstName: 'Ethan',
	// 				lastName: 'Miller',
	// 				email: 'ethan.miller@taskflow.app',
	// 				role: 'Analyst',
	// 				title: 'Research Analyst',
	// 				teamID: 'Research',
	// 				avatar: 'https://i.pravatar.cc/150?img=8',
	// 			},
	// 			{
	// 				cognitoId: 'c44c21c3-21f8-9280-8133-cfbb234cc0a4',
	// 				firstName: 'Ava',
	// 				lastName: 'Thompson',
	// 				email: 'ava.thompson@taskflow.app',
	// 				role: 'Manager',
	// 				title: 'Marketing Lead',
	// 				teamID: 'Marketing',
	// 				avatar: 'https://i.pravatar.cc/150?img=9',
	// 			},
	// 			{
	// 				cognitoId: 'b53d20a9-84e3-7521-8f22-bc8bfa28325e',
	// 				firstName: 'Noah',
	// 				lastName: 'Anderson',
	// 				email: 'noah.anderson@taskflow.app',
	// 				role: 'Member',
	// 				title: 'Campaign Specialist',
	// 				teamID: 'Marketing',
	// 				avatar: 'https://i.pravatar.cc/150?img=10',
	// 			},
	// 		];
	// 		// ✅ 5️⃣ 유저 생성
	// 		for (const u of users) {
	// 			const team = allTeams.find((t) => t.name === u.teamID);

	// 			if (!team) {
	// 				console.warn(`⚠️ Skipping ${u.firstName} — team not found`);
	// 				continue;
	// 			}

	// 			// 👇 teamID만 넘기되, DataStore가 팀을 완전히 sync했는지 기다림
	// 			await new Promise((r) => setTimeout(r, 1500));
	// 			const newUser = await DataStore.save(
	// 				new User({
	// 					cognitoId: u.cognitoId, // Cognito placeholder
	// 					firstName: u.firstName,
	// 					lastName: u.lastName,
	// 					email: u.email,
	// 					role: u.role,
	// 					title: u.title,
	// 					avatar: u.avatar,
	// 					team: team, // ✅ belongsTo 관계 직접 연결
	// 				})
	// 			);

	// 			console.log(`✅ Created: ${newUser.firstName} → Team: ${team.name}`);
	// 		}

	// 		console.log('🎉 All users seeded successfully!');
	// 	};

	// 	seedUsers();
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
