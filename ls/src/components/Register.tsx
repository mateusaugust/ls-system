import React, { useState } from 'react';
import { Box, Modal, Grid, TextField, Button } from '@mui/material';

type TRegister = {
  setCredencial: React.Dispatch<React.SetStateAction<boolean>>;
  credencial: boolean;
};

const Register = ({ credencial, setCredencial }: TRegister) => {
  const users = [{ nome: "Mateus", senha: "123" }, { nome: "Thiago", senha: "123" }];

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleClinckEnter = () => {
    let status = false;

    users.forEach((userPosition) => {
      if (userPosition.nome === user && userPosition.senha === password) {
        setCredencial(true);
        status = true;
      }
    });

    if (!status) {
      alert("Usuário ou senha estão errados");
    }
  };

  return (
    <Box sx={{ height: "100vh" }}>
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
              height: 400,
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={3} sx={{ width: "100%" }}>
              <Grid item xs={12} sx={{ mx: 'auto', mb: 2 }}>
                <img src="https://olimaquinastratores.com.br/wp-content/uploads/2018/10/marca.png" alt="logo" />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%", mx: 'auto' }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-username-input"
                  label="Usuário"
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%", mx: 'auto' }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-password-input"
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <a href='https://discord.gg/Kh4SaN4Bsx' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#1E3B6F' }}>Precisa de ajuda?</a>
                <Button onClick={handleClinckEnter} sx={{ color: "#1E3B6F" }}>Entrar</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Register;
