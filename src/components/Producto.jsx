import React from 'react';

function Producto(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
      <h3>${props.precio}</h3>
    </div>
  );
}

export default Producto;