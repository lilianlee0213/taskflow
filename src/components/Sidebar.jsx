import {useContext, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {
	HomeIcon,
	FolderIcon,
	ListBulletIcon,
	ClockIcon,
	UsersIcon,
	Cog6ToothIcon,
	// ChevronLeftIcon,
	// ChevronRightIcon,
} from '@heroicons/react/24/outline';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import logo_square_light from '../assets/logos/square-light.png';
import logo_square_dark from '../assets/logos/square-dark.png';
import logo_light from '../assets/logos/sidebar-light.png';
import logo_dark from '../assets/logos/sidebar-dark.png';
import {Typography} from '@mui/material';
import {ThemeContext} from '@emotion/react';

const navItems = [
	{
		name: 'Dashboard',
		path: '/',
		icon: <HomeIcon className="w-6 h-6" />,
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: <FolderIcon className="w-6 h-6" />,
	},
	{name: 'Tasks', path: '/tasks', icon: <ListBulletIcon className="w-6 h-6" />},
	{
		name: 'Time Logs',
		path: '/time-logs',
		icon: <ClockIcon className="w-6 h-6" />,
	},
	{name: 'Team', path: '/team', icon: <UsersIcon className="w-6 h-6" />},
	{
		name: 'Settings',
		path: '/settings',
		icon: <Cog6ToothIcon className="w-6 h-6" />,
	},
];

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const context = useContext(ThemeContext);
	const darkMode = context.palette.mode === 'dark' ? true : false;

	const navigate = useNavigate();
	return (
		<div
			className={`h-screen bg-sidebar border-r border-border ${
				isCollapsed ? 'w-20' : 'w-64'
			} flex flex-col justify-between p-4 shadow-lg relative z-20 transition-all duration-200`}>
			<div>
				{/* Logo / Title */}
				<div className="relative flex justify-between items-center">
					{!isCollapsed ? (
						<div className="pr-6 cursor-pointer" onClick={() => navigate('/')}>
							<img
								alt="taskflow"
								className="object-contain"
								src={darkMode ? logo_dark : logo_light}
							/>
						</div>
					) : (
						<div
							className="w-full flex justify-center items-center cursor-pointer"
							onClick={() => navigate('/')}>
							<img
								alt="taskflow"
								className="w-10 h-10"
								src={darkMode ? logo_square_dark : logo_square_light}
							/>
						</div>
					)}
					<button
						onClick={() => setIsCollapsed((prev) => !prev)}
						className="absolute -right-8 top-0.5 p-1 text-text hover:text-primary cursor-pointer">
						{isCollapsed ? (
							<div className="flex items-center p-1 rounded-full bg-primary text-white font-bold">
								<KeyboardArrowRightIcon sx={{fontSize: 'medium'}} />
							</div>
						) : (
							<div className="flex items-center p-1 rounded-full bg-primary text-white font-bold">
								<KeyboardArrowLeftIcon sx={{fontSize: 'medium'}} />
							</div>
						)}
					</button>
				</div>

				{/* Nav Items */}
				<nav className="flex flex-col gap-3 mt-6 ">
					{navItems.map(({name, path, icon}) => (
						<NavLink
							key={path}
							to={path}
							className={({isActive}) =>
								`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
									isActive
										? 'bg-primary text-white'
										: 'hover:text-primary-dark hover:text-semi-bold'
								}`
							}>
							{icon}
							{!isCollapsed && <span>{name}</span>}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
