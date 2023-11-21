import { Box, Modal, Grid, Typography, Button } from '@mui/material'
import React from 'react'

type TConfirmGoOut ={
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;

}

const ConfirmGoOut = ({setOpen, open}:TConfirmGoOut) => {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:"150px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius:"20px",
    justifyContent:"space-between",
    display:"flex",
    flexDirection:"column"
  };

  return (
    <>
      <Modal open={open} onClose={()=> setOpen(false)}> 
        <Box sx={style}>
          <Grid container> 
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Typography fontSize={"25px"}>
                Deseja mesmo sair?
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"end", gap:"15px"}}>
                  <Button onClick={()=> setOpen(false)} sx={{
                    backgroundColor:"#ED1C24", 
                    color:"white", 
                    borderColor:"#ED1C24",

                    '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
                   }} >
                    Cancelar
                  </Button>
                  
                  <Button onClick={()=> setOpen(false)}sx={{
                    backgroundColor:"#267e1b", 
                    color:"white", 
                    borderColor:"#267e1b",

                    '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
                   }} >
                    Confirmar
                  </Button>
              </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default ConfirmGoOut