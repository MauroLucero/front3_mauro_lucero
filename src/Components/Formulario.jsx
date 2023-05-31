import React from "react";

const Formulario = ({ setClub, setStyles, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-club">
      <label>Ingresa tu nombre:</label>
      <input
        type="text"
        onBlur={(e) =>
          setClub((prevState) => ({
            ...prevState,
            name: e.target.value,
          }))
        }
      />
      <label>Club </label>
      <input
        type="text"
        onChange={(e) =>
          setClub((prevState) => ({
            ...prevState,
            clubName: e.target.value,
          }))
        }
      />
      <label>Colores de tu equipo</label>
      <div>
        <select
          onChange={(e) =>
            setStyles((prevState) => ({
              ...prevState,
              color1: e.target.value,
            }))
          }
        >
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>

        <select
          onChange={(e) =>
            setStyles((prevState) => ({ ...prevState, color2: e.target.value }))
          }
        >
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
      </div>

      <button>Enviar</button>
    </form>
  );
};

export default Formulario;
