import {useEffect, useState} from 'react';
import './index.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Tasks from './pages/Tasks';
import TimeLogs from './pages/TimeLogs';
import Team from './pages/Team';
import Settings from './pages/Settings';
import Topbar from './components/Topbar';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return (
		<Router>
			<div className="flex h-screen overflow-hidden">
				<Sidebar darkMode={darkMode} />
				<div className="flex flex-col flex-1">
					<Topbar />
					<main className="flex-1 p-6 overflow-auto">
						<Routes>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/projects/:id" element={<ProjectDetail />} />
							<Route path="/tasks" element={<Tasks />} />
							<Route path="/time-logs" element={<TimeLogs />} />
							<Route path="/team" element={<Team />} />
							<Route
								path="/settings"
								element={
									<Settings darkMode={darkMode} setDarkMode={setDarkMode} />
								}
							/>
							<Route path="*" element={<Dashboard />} />
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
