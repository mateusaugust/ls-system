import React, { useState } from 'react';
import { Box, Grid, TextField, Autocomplete } from '@mui/material';

const Form = () => {
  const [manualDate, setManualDate] = useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 600, 
          height: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6}sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TextField id="outlined-password-input" label="Numeração" type="text" />
          </Grid>

          <Grid item xs={6}sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TextField id="outlined-password-input" label="Usuario" type="text" sx={{ width: '80%' }} />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: '100%' }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={prioridade}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Prioridade" />}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: '100%' }}>
            <TextField
              id="manual-date-input"
              label=" "
              type="date"
              value={manualDate}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: '100%' }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Status}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Status" />}
            />
          </Grid>

          <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TextField
              id="filled-multiline-static"
              label="Informe seu problema"
              multiline
              rows={5}
              defaultValue=""
              variant="filled"
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Status = [
  { label: 'Espera', year: 1994 },
  { label: 'Andamento', year: 1972 },
  { label: 'Concluída', year: 1974 },
];

const prioridade = [
  { label: 'Urgente', year: 1994 },
  { label: 'Média', year: 1972 },
  { label: 'Tranquila', year: 1974 },
];

export default Form;
