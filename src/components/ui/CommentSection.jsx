import React from 'react';
import {
	Box,
	Typography,
	Avatar,
	TextField,
	IconButton,
	InputAdornment,
	Stack,
	Divider,
} from '@mui/material';
import {Send, AttachFile} from '@mui/icons-material';
import dayjs from 'dayjs';
import {PaperAirplaneIcon} from '@heroicons/react/24/outline';
export default function CommentSection({comments = []}) {
	return (
		<Box sx={{px: 2, display: 'flex', flexDirection: 'column'}}>
			{comments.length > 0 ? (
				comments.map((c, i) => (
					<Box key={i} sx={{height: 'fit-content'}}>
						<Stack direction="row" spacing={1.5} alignItems="flex-start">
							<Avatar
								src={c.user.avatar}
								alt={c.user.name}
								sx={{
									width: 32,
									height: 32,
									fontSize: '0.9rem',
									bgcolor: 'var(--color-chip-bg-blue)',
									color: 'var(--color-chip-text-blue)',
								}}>
								{!c.user.avatar && c.user.name[0]}
							</Avatar>

							<Box sx={{flex: 1}}>
								<Stack direction="row" alignItems="center" spacing={1}>
									<Typography variant="body2" sx={{fontWeight: 600}}>
										{c.user.name}
									</Typography>
									<Typography
										variant="caption"
										sx={{color: 'var(--color-text-muted)'}}>
										{dayjs(c.createdAt).format('D MMM YYYY')}
									</Typography>
								</Stack>

								<Typography
									variant="body2"
									sx={{
										color: 'var(--color-text)',
										lineHeight: 1.5,
										// mb: 1,
									}}>
									{c.text}
								</Typography>
							</Box>
						</Stack>
						{i < comments.length - 1 && (
							<Divider sx={{my: 1.5, opacity: 0.2}} />
						)}
					</Box>
				))
			) : (
				<Typography
					variant="body2"
					sx={{color: 'var(--color-text-muted)', fontStyle: 'italic'}}>
					No comments yet.
				</Typography>
			)}

			<Box
				sx={{
					mt: 6,
					display: 'flex',
					alignItems: 'center',
					border: '1px solid var(--color-border)',
					borderRadius: 2,
					px: 1.5,
				}}>
				<TextField
					fullWidth
					placeholder="Add a comment..."
					variant="standard"
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position="end">
								<div className="cursor-pointer k">
									<PaperAirplaneIcon
										className="w-5 h-5 cursor-pointer"
										style={{
											color: 'var(--color-primary)',
										}}
									/>
								</div>
							</InputAdornment>
						),
					}}
					sx={{
						'& .MuiInputBase-input': {
							py: 1.2,
							color: 'var(--color-text)',
						},
					}}
				/>
			</Box>
		</Box>
	);
}
