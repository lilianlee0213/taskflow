import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box, Typography, Avatar, Chip} from '@mui/material';

const PageTable = ({columns = [], rows = []}) => {
	const dataRows = rows.map((row, i) => ({id: row.id || i, ...row}));

	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				minWidth: 0,
				overflow: 'hidden',
			}}>
			{' '}
			<DataGrid
				rows={dataRows}
				columns={columns}
				disableRowSelectionOnClick
				initialState={{
					pagination: {paginationModel: {pageSize: 8, page: 0}}, // ✅ 기본 표시 10개
				}}
				sx={{
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: 'background.default',
						color: 'text.secondary',
						fontWeight: 600,
						borderBottom: (theme) => `1px solid #e5e7eb`,
					},
					'& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within':
						{
							outline: (theme) => `1px solid ${theme.palette.divider}`,
							outlineOffset: '-1px',
						},
					'& .MuiDataGrid-row': {
						borderBottom: (theme) => `1px solid ${theme.palette.divider}`, // ✅ 행 구분선
					},
					'& .MuiDataGrid-columnHeaderTitle': {
						color: 'text.primary',
						fontWeight: 600,
					},
					'& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
						outline: (theme) => `1px solid ${theme.palette.divider}`, // ✅ 원하는 색상 적용
						outlineOffset: '-1px',
					},
				}}
			/>
		</Box>
	);
};

export default PageTable;
