
import React, { useState } from 'react'
import { Box,  Grid, TextField, Button, Typography } from '@mui/material';

type TlateralMenu = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  section: number;
}

const LateralMenu = ({section, setSelection, setOpen}:TlateralMenu) => {
  const options = ["Todos Chamados", "Abrir Chamados","IA do Campo"];
  

  const handleClickMenu = (index : number) =>{
    setSelection(index);
  }

  return (
    <Box sx={{borderRight:'1px solid #E0E0E0', width:'250px', height:'100vh', display:"flex", justifyContent:"space-between", flexDirection:"column" }}>
      <Grid container >
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center", mt:"20px", borderBottom:'1px solid #E0E0E0', pb:"20px"}}>
          <img src="https://olimaquinastratores.com.br/wp-content/uploads/2018/10/marca.png" style={{width:"100px"}}/>
        </Grid>

        
        {options.map((text,index)=>(
          <Grid item xs={12} >
            <Box sx={{
              mt: index === 0 ? "15px" : "0px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              height:'50px',
              backgroundColor: section === index ? "#E0E0E0" : "white" ,
              '&:hover':{backgroundColor:'#E0E0E0'}}}

              onClick = {()=> handleClickMenu(index)}
              
              >
              {text}
            </Box>
          </Grid>
        ))} 
      </Grid>

      <Box sx={{padding:"20px", display:"flex", justifyContent:"center", alignItems:'center'}}> 
        <Button variant="outlined" size="medium"  onClick={()=> setOpen(true)}
          sx={{
            backgroundColor:"#ED1C24", 
            color:"white", 
            borderColor:"#ED1C24",

            '&:hover':{backgroundColor:"#1E3B6F", borderColor:"#1E3B6F"}
          }} 
        >
          Sair
        </Button>
      </Box>

      {
        //Colaborador: Mateus Augusto da Silva
      }
    </Box>
  )
}

export default LateralMenu