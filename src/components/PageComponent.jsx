import {
	Box,
	Button,
	Paper,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import React from 'react';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import InputField from './ui/InputField';
const PageComponent = ({title, headerTitle, content}) => {
	return (
		<Box sx={{height: 'calc(100% - 120px)'}}>
			<div className="flex justify-between items-center mb-4 ">
				<Typography variant="h3" sx={{fontWeight: 600}}>
					{title}
				</Typography>
				<Button
					variant="contained"
					color="primary"
					size="large"
					sx={{
						bgcolor: 'var(--color-primary)',
						color: '#fff',
						'&:hover': {bgcolor: 'var(--color-primary-dark)'},
					}}>
					+ Add {title}
				</Button>
			</div>
			<header className="w-full grid grid-cols-5 items-center mb-8 gap-2">
				<>
					<div className="col-span-1 bg-sidebar p-1 pb-1.5 w-fit grid grid-cols-2 rounded-sm">
						<Button
							className="view-toggle-btn"
							sx={{
								backgroundColor: 'var(--color-card) !important',
								marginRight: '4px',
							}}
							disableElevation>
							{headerTitle}
						</Button>
						<Button
							className="view-toggle-btn"
							sx={
								{
									// fontWeight: '600',
									// backgroundColor: 'var(--color-card) !important',
								}
							}
							disableElevation>
							<BookmarkIcon className="h-4 w-4 mr-0.5 font-semibold" />
							Archived
						</Button>
					</div>
					<div className="col-span-2 col-start-3 justify-self-end flex justify-center items-center">
						<Typography variant="button" sx={{textTransform: 'none', mr: 1}}>
							Sort by:
						</Typography>
						<FormControl size="small">
							{/* <InputLabel id="sort-label">Sort By:</InputLabel> */}
							<Select
								labelId="sort-label"
								id="sort-select"
								value="Newest"
								// onChange={handleChange}
								sx={{
									backgroundColor: 'var(--color-card)',
									border: 'none',
									boxShadow: 'none',
									width: '166px',
									// fontSize:"14px",
									'& .MuiSelect-select': {
										padding: '2px 12px', // ✅ 내부 텍스트 영역 padding
									},
									'& .MuiOutlinedInput-notchedOutline': {
										border: 'none', // ✅ 외곽선 제거
									},
									'&:hover .MuiOutlinedInput-notchedOutline': {
										border: 'none', // ✅ hover 시에도 제거
									},
									'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
										border: 'none', // ✅ focus 시에도 제거
									},
								}}
								MenuProps={{
									PaperProps: {
										sx: {
											fontSize: '12px',
											backgroundColor: 'var(--color-card)', // ✅ 드롭다운 전체 배경
											boxShadow: '0px 2px 6px rgba(0,0,0,0.08) !important', // ✅ 부드러운 그림자
											'& .MuiMenuItem-root': {
												fontSize: '0.95rem', // ✅ 드롭다운 아이템 폰트 크기
												color: 'var(--color-text)',
											},
											'& .MuiMenuItem-root.Mui-selected': {
												backgroundColor: 'var(--color-sidebar)', // ✅ 선택된 아이템 배경
											},
										},
									},
								}}>
								<MenuItem value="Newest">Newest</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="flex items-center">
						<InputField type="search" placeholder="Search..." />
					</div>
				</>{' '}
			</header>
			<Paper
				elevation={0}
				sx={{height: '100% !important'}}
				className="!bg-sidebar shadow-md p-4 rounded-full transition-all duration-200">
				{content}
			</Paper>
		</Box>
	);
};

export default PageComponent;
