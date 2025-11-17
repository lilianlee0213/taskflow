import React from 'react';
import {Tooltip, Typography} from '@mui/material';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import {RiExpandDiagonalS2Line} from 'react-icons/ri';
import {RiEditBoxLine} from 'react-icons/ri';
import {RiBookmarkLine} from 'react-icons/ri';
import {RiBookmarkFill} from 'react-icons/ri';

const DrawerHeader = ({onCloseDrawer, showProject, onCloseProject}) => {
	return (
		<div className="flex justify-between items-center mb-4 text-text">
			<div className="flex items-center gap-1">
				<Tooltip title="Close">
					<MdOutlineKeyboardDoubleArrowRight
						className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100"
						onClick={onCloseDrawer}
					/>
				</Tooltip>
				<Tooltip title="Expand">
					<RiExpandDiagonalS2Line className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100" />
				</Tooltip>
			</div>
			<div className="flex items-center gap-1">
				{showProject && (
					<Tooltip title="Close Project">
						<MdOutlineKeyboardDoubleArrowRight
							className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100"
							onClick={onCloseProject}
						/>
					</Tooltip>
				)}
				<Tooltip title="Edit">
					<RiEditBoxLine className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100" />
				</Tooltip>
				<Tooltip title="Archive">
					<RiBookmarkLine className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100" />
				</Tooltip>
				{/* Remove Archive */}
				{/* <Tooltip title="Archive project">
					<RiBookmarkFill className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-40 hover:opacity-100" />
				</Tooltip> */}
				<div className="flex justify-center items-center w-auto h-8 py-1 px-2 rounded-sm hover:bg-sidebar opacity-40 hover:opacity-100">
					<Typography
						variant="button"
						textTransform={'inherit'}
						sx={{color: 'var(--color-text)', cursor: 'pointer'}}>
						Share{' '}
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default DrawerHeader;
