import { useState } from "react";
import ConfirmGoOut from "./Modals/ConfirmGoOut";
import LateralMenu from "./components/LateralMenu";
import Register from "./components/Register";

function App() {

  const [open, setOpen] = useState(false);

  return (
   <>
    <LateralMenu setOpen={setOpen}/>
    <ConfirmGoOut setOpen={setOpen} open={open}/>
   </>
  );
}

export default App;
