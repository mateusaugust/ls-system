import { useState } from "react";
import ConfirmGoOut from "./Modals/ConfirmGoOut";
import LateralMenu from "./components/LateralMenu";
import Register from "./components/Register";
import Form from "./components/Form"  ;
import ModalButtonsDynamic from "./Modals/ModalButtonsDynamic";
import Workspace from "./Workspace";



function App() {

  const [credencial, setCredencial] = useState(false);

  return (
   <>
      {credencial === false && <Register credencial={credencial}setCredencial={setCredencial}/>}
      
      {credencial === true && <Workspace/>}
    {
      //Colaborador: Mateus Augusto da Silva
      //:)
    }
   </>
  );
}

export default App;
