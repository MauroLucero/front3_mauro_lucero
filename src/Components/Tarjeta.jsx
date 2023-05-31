import React from "react";

const Tarjeta = ({ club, styles }) => {
  return (
    <div className="tarjeta">
      <h2>Gracias {club.name} por contarnos!</h2>
      <h3>Tu club favorito es {club.clubName}</h3>
      <div className="bandera" style={{ backgroundColor: styles.color1 }}></div>
      <div className="bandera" style={{ backgroundColor: styles.color2 }}></div>
    </div>
  );
};

export default Tarjeta;
