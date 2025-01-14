// src/components/PersonaCard.jsx
import React from "react";


//Este componente recibirá nombre, apellido y edad como props y los mostrará dentro de una card.
function PersonaCard(props) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {props.nombre} {props.apellido}
        </h5>
        <p className="card-text">Edad: {props.edad}</p>
      </div>
    </div>
  );
}

export default PersonaCard;
