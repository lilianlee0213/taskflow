import React from 'react';
import {Box, InputBase} from '@mui/material';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const SearchInput = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				maxWidth: '20rem',
				flex: 1,
				px: 2,
				py: 1,
				border: '1px solid transparent',
				bgcolor: 'transparent',
				'&:focus-within': {
					borderColor: 'transparent',
				},
			}}>
			<MagnifyingGlassIcon className="h-6 w-6 text-inherit opacity-70 mb-0.5" />
			<InputBase
				placeholder="Search"
				fullWidth
				sx={{
					color: 'inherit',
					'& input::placeholder': {
						opacity: 0.7,
					},
				}}
			/>
		</Box>
	);
};

export default SearchInput;
