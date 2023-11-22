import { Box, Button, Grid } from '@mui/material'
import React from 'react'

type TModalButtonsDynamic={
  typeButtons: number;
}

const ModalButtonsDynamic = ({typeButtons}:TModalButtonsDynamic) => {
  return (
    <Box sx={{height:"90px", mt:"10px", borderTop:"1px solid #E0E0E0"}}>
     <Grid container sx={{padding:"20px", display:"flex", gap:"16px", height:"100%", alignItems:"center", justifyContent:"end"}}>
        <Grid item >
          <Button sx={{
                    backgroundColor:"#ED1C24", 
                    color:"white", 
                    borderColor:"#ED1C24",

                    '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
                   }}>
              {typeButtons !== 2 ? "Deletar" : "Descartar"}
          </Button>
        </Grid>
        
        <Grid item>
          <Button sx={{
                    backgroundColor:"#267e1b", 
                    color:"white", 
                    borderColor:"#267e1b",

                    '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
                   }} >
              {typeButtons === 0 ? "Abrir": "Salvar"}
          </Button>
        </Grid>

        {typeButtons === 0 && (
          <Grid item >
            <Button sx={{
                    backgroundColor:"#fba725", 
                    color:"white", 
                    borderColor:"#fba725",

                    '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
                   }} >
                Atualizar
            </Button>
          </Grid>
        )}
        

      </Grid>
     
     </Box>
  )
}
export default ModalButtonsDynamic