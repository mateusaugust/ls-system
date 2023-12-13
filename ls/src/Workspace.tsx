import { Box } from '@mui/material';
import React, { useState } from 'react'
import ConfirmGoOut from './Modals/ConfirmGoOut';
import LateralMenu from './components/LateralMenu';
import ModalButtonsDynamic from './Modals/ModalButtonsDynamic';
import Form from './components/Form';
import ListAlter from './components/ListAlter';

const Workspace = () => {

  const [open, setOpen] = useState(false);
  const [section, setSelection] = useState(0);

  return (
    <Box sx={{display:"flex"}}>
      <LateralMenu setOpen={setOpen} setSelection={setSelection} section={section}/>

      <Box sx={{width:"100%", padding:"10px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        {section === 0 && <ListAlter/>}

        {section === 1 && <Form/>}

        {section == 2 && "teste1"}

        <ModalButtonsDynamic typeButtons={section}/>
      </Box>

      <ConfirmGoOut setOpen={setOpen} open={open} />
    </Box>
  )
}

export default Workspace