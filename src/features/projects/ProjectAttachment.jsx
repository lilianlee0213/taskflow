import React from 'react';
import {Divider, Stack, Tooltip, Typography} from '@mui/material';
import {AttachmentFileCard} from '../../components/ui/AttachmentFileCard';
import {PlusIcon} from '@heroicons/react/24/outline';

export const ProjectAttachment = () => {
	const attachments = [
		{id: 1, name: 'preview.jpg', size: '1.5 MB'},
		{id: 2, name: 'Brief.pdf', size: '100 KB'},
		{id: 3, name: 'Wireframe.zip', size: '3.2 MB'},
	];
	const handleAddFile = () => {};
	const handleAdd = () => {};
	return (
		<div className="px-8">
			<Divider sx={{mb: 2}} />
			<div className="flex justify-between items-center mx-1 mb-4">
				<Typography
					sx={{fontWeight: 600, color: 'text.secondary'}}
					variant="body2">
					Attchment
				</Typography>
				<Tooltip title="Add">
					<PlusIcon
						onClick={handleAddFile}
						className="w-7 h-7 p-1 rounded-sm hover:bg-sidebar cursor-pointer opacity-85 hover:opacity-100"
					/>
				</Tooltip>
			</div>
			<Stack direction="row" flexWrap="wrap" gap={2}>
				{attachments.map((file) => (
					<AttachmentFileCard key={file.id} file={file} onAdd={handleAdd} />
				))}
			</Stack>
		</div>
	);
};
