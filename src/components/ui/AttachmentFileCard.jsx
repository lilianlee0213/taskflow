import React from 'react';
import {Box, Typography, IconButton, Tooltip} from '@mui/material';
import {FileIcon, defaultStyles} from 'react-file-icon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import {PlusIcon} from '@heroicons/react/24/outline';

export const AttachmentFileCard = ({file, onDownload, onMenuClick}) => {
	// 파일 확장자 추출 (소문자)
	const ext = file.name?.split('.').pop()?.toLowerCase() || 'file';
	const style = defaultStyles[ext] || defaultStyles.default;

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 2,
				backgroundColor: 'var(--color-card)',
				border: '1px solid var(--color-border)',
				borderRadius: 2,
				p: 1.5,
				width: '100%',
				maxWidth: 280,
				boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
				'&:hover': {
					boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
					transform: 'translateY(-2px)',
					transition: '0.2s ease',
				},
			}}>
			{/* 파일 아이콘 */}
			<Box sx={{width: 38, height: 38, flexShrink: 0}}>
				<FileIcon extension={ext} {...style} />
			</Box>

			{/* 파일 정보 */}
			<Box sx={{flex: 1, minWidth: 0}}>
				<Typography
					variant="body2"
					noWrap
					sx={{
						color: 'var(--color-text)',
						fontWeight: 500,
						lineHeight: 1.4,
					}}>
					{file.name}
				</Typography>
				<Typography variant="caption" sx={{color: 'var(--color-text-muted)'}}>
					{file.size || '1.2 MB'}
				</Typography>
			</Box>

			{/* 액션 아이콘 */}
			<Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
				<Tooltip title="Download">
					<IconButton size="small" onClick={() => onDownload?.(file)}>
						<DownloadIcon
							sx={{fontSize: 18, color: 'var(--color-text-muted)'}}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title="More options">
					<IconButton size="small" onClick={() => onMenuClick?.(file)}>
						<MoreVertIcon
							sx={{fontSize: 18, color: 'var(--color-text-muted)'}}
						/>
					</IconButton>
				</Tooltip>
			</Box>
		</Box>
	);
};
