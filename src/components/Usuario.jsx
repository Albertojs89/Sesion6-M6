import React from 'react';

//Ahora haremos un componente llamado Usuario que reciba nombre y edad como props, y los muestre juntos en un mensaje.

function Usuario(props){
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Edad: {props.edad}</p>
    </div>
  )
}

export default Usuario;