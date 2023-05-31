import { useState } from "react";
import "./App.css";
import Formulario from "./Components/Formulario";
import Tarjeta from "./Components/Tarjeta";
import MensajeError from "./Components/mensajeError";

function App() {
  const [club, setClub] = useState({
    name: "",
    clubName: "",
  });

  const [styles, setStyles] = useState({
    color1: "black",
    color2: "white",
  });
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      club.name.length >= 3 &&
      club.name[0] != " " &&
      club.clubName.length >= 6
    ) {
      setShow(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShow(false);
    }
  };

  return (
    <>
      <h1>Decinos cual es tu equipo favorito!</h1>
      <Formulario
        handleSubmit={handleSubmit}
        setClub={setClub}
        setStyles={setStyles}
      />

      {showError && <MensajeError />}
      {show && <Tarjeta club={club} styles={styles} />}
    </>
  );
}

export default App;
