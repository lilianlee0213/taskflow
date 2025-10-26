import {PlusIcon} from '@heroicons/react/24/outline';
import {Tooltip, Typography} from '@mui/material';

const InfoRow = ({label, children, showAddIcon = false, onAdd}) => {
	return (
		<div className="w-full flex gap-2 justify-start items-center flex-nowrap">
			<Typography
				variant="body1"
				sx={{
					color: 'text.secondary',
					fontWeight: 600,
					width: '120px',
					flexShrink: 0,
				}}>
				{label}
			</Typography>

			<div className="flex flex-wrap gap-2 items-center">
				{children}

				{showAddIcon && (
					<Tooltip title="Add">
						<PlusIcon
							onClick={onAdd}
							className="w-8 h-8 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-85 hover:opacity-100"
						/>
					</Tooltip>
				)}
			</div>
		</div>
	);
};

export default InfoRow;
