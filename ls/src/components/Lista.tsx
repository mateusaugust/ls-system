import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 700 },
  { 
    field: 'status',
    headerName: 'Status',
    description: 'Esta coluna tem um value getter e não é ordenável.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      ` ${params.row.status || ''}`,
  },
];

const rows = [
  { id: 1, nome: 'Jose', status: 'processo' },
  { id: 2, nome: 'João', status: 'processo' },
  { id: 3, nome: 'Maria ', status: 'processo' },
  { id: 4, nome: 'Douglas', status: 'processo' },
  { id: 5, nome: 'Enzo', status: 'processo' },
  { id: 6, nome: 'Enzo Junior', status: 'processo' },
  { id: 7, nome: 'Maria Aparecida', status: 'processo' },
  { id: 8, nome: 'Ze', status: 'processo' },
  { id: 9, nome: 'Adão', status: 'Concluido' },
].map(({ id, nome, status }) => ({ id, nome, status }));

export default function DataTable() {
  return (
    <Box style={{ height: 425, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { 
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}