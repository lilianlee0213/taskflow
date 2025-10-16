import {useState} from 'react';
import {NavLink} from 'react-router-dom';
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
import smallLogo from '../assets/logo_square_light.png';
import logo from '../assets/logo_square_light.png';
import {Typography} from '@mui/material';

const navItems = [
	{
		name: 'Dashboard',
		path: '/dashboard',
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

const Sidebar = ({darkMode}) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div
			className={`h-screen ${
				isCollapsed ? 'w-20' : 'w-64'
			} bg-sidebar-bg text-sidebar-text flex flex-col justify-between p-4 shadow-lg relative z-20 transition-all duration-200`}>
			<div>
				{/* Logo / Title */}
				<div className="relative flex items-center justify-between mb-6">
					{!isCollapsed ? (
						<div className="flex gap-1 h-12">
							<img alt="taskflow" className="object-contain" src={logo} />
							<Typography
								fontSize={28}
								letterSpacing={2}
								py={0.5}
								fontWeight={600}
								sx={{
									color: darkMode ? 'white' : '#111827',
									paddingY: '2px',
								}}>
								{' '}
								TaskFlow
							</Typography>
						</div>
					) : (
						<div className="flex flex-2 justify-center items-center">
							<img alt="taskflow" className="w-10 h-10" src={smallLogo} />
						</div>
					)}
					<button
						onClick={() => setIsCollapsed((prev) => !prev)}
						className="absolute -right-8 top-0.5 p-1 text-sidebar-text hover:text-primary cursor-pointer">
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
				<nav className="flex flex-col gap-3">
					{navItems.map(({name, path, icon}) => (
						<NavLink
							key={path}
							to={path}
							className={({isActive}) =>
								`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
									isActive
										? 'bg-primary text-white'
										: 'hover:bg-sidebar-hover hover:text-sidebar-text'
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
