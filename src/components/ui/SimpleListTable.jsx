import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box, Typography, Avatar, Chip} from '@mui/material';

export const SimpleListTable = ({
	title,
	columns = [],
	rows = [],
	height = 400,
}) => {
	// DataGrid는 반드시 각 row에 id 필요
	const dataRows = rows.map((row, i) => ({id: row.id || i, ...row}));

	return (
		<div>
			<DataGrid
				rows={dataRows}
				columns={columns}
				columnHeaderHeight={50}
				rowHeight={50}
				disableRowSelectionOnClick
				disableColumnMenu
				pageSizeOptions={[5, 10, 25]}
				initialState={{
					pagination: {paginationModel: 5},
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
					'& .MuiDataGrid-cell p': {
						fontSize: '.9rem !important',
					},
					'& .MuiDataGrid-columnHeaderTitle': {
						fontSize: '0.95rem !important',
						color: 'text.secondary',
						fontWeight: 600,
					},
					'& .MuiTablePagination-root p, & .MuiTablePagination-actions': {
						fontSize: '0.85rem !important',
					},
					'& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
						outline: (theme) => `1px solid ${theme.palette.divider}`, // ✅ 원하는 색상 적용
						outlineOffset: '-1px',
					},
				}}
			/>
		</div>
	);
};
