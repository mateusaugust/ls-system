import { useState } from "react";
import ConfirmGoOut from "./Modals/ConfirmGoOut";
import LateralMenu from "./components/LateralMenu";
import Register from "./components/Register";

function App() {
  //Se for mostrar a tela de Registro, comente todas linhas que não seja referente a ela.
  //Caso for mostrar o menu lateral, comente todas as linhas que nao seja referente a ele.


  //Para habilitar o menu lateral tire os comentarios da const abaixo,
  //dos componentes LateralMenu e ConfirmGoOut
  //const [open, setOpen] = useState(false);

  return (
   <>
    {
      //Para Habilitar a Tela de Registro tire as barras de comentario do componente Register
      //<Register/>
    }


    {
      //Menu lateral
      //<LateralMenu setOpen={setOpen}/>
      //<ConfirmGoOut setOpen={setOpen} open={open}/>
    }

    {
      //Colaborador: Mateus Augusto da Silva
      //:)
    }
   </>
  );
}

export default App;
