import React from 'react'
import { Box, Modal, Grid, TextField, Button } from '@mui/material';

const Register = () => {
  

  return (
    <Box sx={{ height:"100vh", }}>
      <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"

        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
          
        }}

      >
        <Box
          sx={{
            position: 'relative',
            width: 450,
            height:400,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius:"25px",
            display:"flex",
            alignItems:"center",
          }}
        >
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
                <img src="https://olimaquinastratores.com.br/wp-content/uploads/2018/10/marca.png"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{width:"100%"}}
                  id="outlined-password-input"
                  label="Usuário"
                  type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{width:"100%"}}
                  id="outlined-password-input"
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <a href='https://discord.gg/Kh4SaN4Bsx' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#1E3B6F' }}>Precisa de ajuda?</a>
                <Button sx={{color:"#1E3B6F"}}>Entrar</Button>
              </Grid>
            </Grid>
         </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default Register