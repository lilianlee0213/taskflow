import {
	MagnifyingGlassIcon,
	BellIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline';
import InputField from './ui/InputField';

const Topbar = () => {
	return (
		<header className="bg-card border-b border-b-border flex items-center justify-between px-6 py-2 shadow-sx relative z-10">
			{/* Search */}
			<InputField type="search" placeholder="Search..." />
			{/* Right Icons */}
			<div className="flex items-center gap-6">
				<button
					type="button"
					className="relative p-2 text-topbar-text hover:text-topbar-text-hover">
					<BellIcon className="h-6 w-6" />
					<span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500" />
				</button>
				<div className="h-6 border-l border-l-topbar-text"></div>
				<button
					type="button"
					className="text-topbar-text hover:text-topbar-text-hover transition duration-200 ease-in-out">
					<div className="flex items-center gap-4 cursor-pointer ">
						<img
							src="https://i.pravatar.cc/40?img=1"
							alt="User Avatar"
							className="w-8 h-8 rounded-full object-cover"
						/>
						<h2 className="font-semibolds">Lilian Lee</h2>
						<ChevronDownIcon className="h-5 w-5" />
					</div>
				</button>
			</div>
		</header>
	);
};

export default Topbar;
