import { useState } from "react";
import "./App.css";
import Calculator from "./component/Calculator/Calculator";
import Home from "./component/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  const [homeTrue, setHomeTrue] = useState("true");
  return (
    <>
      {homeTrue == "true" ? <Home setHomeTrue={setHomeTrue} /> : <Calculator />}
      <ToastContainer />
    </>
  );
}

export default App;
