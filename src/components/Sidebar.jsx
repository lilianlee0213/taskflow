import {useContext, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {
	HomeIcon,
	FolderIcon,
	ListBulletIcon,
	ClockIcon,
	UsersIcon,
	Cog6ToothIcon,
	BellIcon,
	ChevronDownIcon,
	ArrowRightStartOnRectangleIcon,
	ChevronUpIcon,
	// ChevronLeftIcon,
	// ChevronRightIcon,
} from '@heroicons/react/24/outline';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import logo_square_light from '../assets/logos/square-light.png';
import logo_square_dark from '../assets/logos/square-dark.png';
import logo_light from '../assets/logos/sidebar-light.png';
import logo_dark from '../assets/logos/sidebar-dark.png';
import {Divider, Typography} from '@mui/material';
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
	{
		name: 'Tasks',
		path: '/tasks',
		icon: <ListBulletIcon className="w-6 h-6" />,
	},
	{
		name: 'Time Logs',
		path: '/time-logs',
		icon: <ClockIcon className="w-6 h-6" />,
	},
	{
		name: 'Team',
		path: '/team',
		icon: <UsersIcon className="w-6 h-6" />,
	},
];

const profileItems = [
	{
		name: 'Setting',
		path: '/setting',
		icon: <Cog6ToothIcon className="w-6 h-6" />,
	},
	{
		name: 'Notifications',
		path: '/notifications',
		icon: (
			<button type="button" className="relative cursor-pointer">
				<BellIcon className="h-6 w-6" />
				<span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-error" />
			</button>
		),
	},
	{
		name: 'SignOut',
		path: '/login',
		icon: <ArrowRightStartOnRectangleIcon className="w-6 h-6" />,
	},
];
const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [openMenu, setOpenMenu] = useState(true);
	const context = useContext(ThemeContext);
	const darkMode = context.palette.mode === 'dark' ? true : false;

	const navigate = useNavigate();
	return (
		<div
			className={`h-screen bg-sidebar border-r border-border ${
				isCollapsed ? 'w-20' : 'w-64'
			} flex flex-col justify-between shadow-lg relative z-20 transition-all duration-200`}>
			<div className="relative flex justify-between items-center p-4">
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
					className="absolute -right-4 top-3.5 p-1 text-text hover:text-primary cursor-pointer">
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

			<div className="h-full">
				{/* Logo / Title */}

				{/* Nav Items */}
				<div className="h-full flex flex-col justify-between">
					<nav className="flex flex-col gap-3 px-4">
						{navItems.map(({name, path, icon}) => (
							<NavLink
								key={path}
								to={path}
								className={({isActive}) =>
									[
										'flex items-center gap-3 p-1.5 rounded-md transition-all duration-200',
										isActive
											? 'bg-primary text-white'
											: 'hover:text-primary-dark',
										isCollapsed ? 'justify-center' : '',
									].join(' ')
								}>
								{icon}
								{!isCollapsed && <span>{name}</span>}
							</NavLink>
						))}
					</nav>
					<div className="relative">
						<nav
							className={`absolute z-10 w-full flex flex-col gap-3 px-4 transition-all duration-300 ease-in-out transform ${
								openMenu
									? '-translate-y-38 opacity-100'
									: 'translate-y-100 opacity-0 pointer-events-none'
							}`}>
							{profileItems.map(({name, path, icon}) => (
								<NavLink
									key={path}
									to={path}
									className={({isActive}) =>
										[
											'flex items-center gap-3 p-1.5 rounded-md transition-all duration-300',
											isActive
												? 'bg-primary text-white'
												: 'hover:text-primary-dark',
											isCollapsed ? 'justify-center' : '',
										].join(' ')
									}>
									{icon}
									{!isCollapsed && <span>{name}</span>}
								</NavLink>
							))}
						</nav>
						<Divider />
						<div
							className={`bg-sidebar relative z-10 w-full flex justify-center items-center pt-3 pb-4 ${
								isCollapsed ? 'justify-center' : 'justify-between gap-6'
							}`}>
							<div
								onClick={() => {
									if (isCollapsed) {
										setOpenMenu((prev) => !prev);
									}
								}}
								className={`flex items-center ${
									isCollapsed ? 'cursor-pointer' : 'gap-2'
								}`}>
								<img
									src="https://i.pravatar.cc/40?img=1"
									alt="User Avatar"
									className="w-8.5 h-8.5 rounded-full object-cover"
								/>

								{!isCollapsed && (
									<div>
										<Typography
											variant="h6"
											sx={{
												fontWeight: 600,
												mb: -1,
												fontSize: '14px !important',
											}}>
											Lilian Lee
										</Typography>
										<Typography variant="caption">
											lilian.lee@taskflow.com
										</Typography>
									</div>
								)}
							</div>
							{!isCollapsed &&
								(openMenu ? (
									<ChevronUpIcon
										className="h-4 w-4 cursor-pointer transition-transform duration-200"
										onClick={() => setOpenMenu(false)}
									/>
								) : (
									<ChevronDownIcon
										className="h-4 w-4 z-10 cursor-pointer transition-transform duration-200"
										onClick={() => setOpenMenu(true)}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
