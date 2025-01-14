import React from "react";

function Saludo(props) {
  return <h1>{props.mensaje}</h1>;
}

export default Saludo;


/*
Vamos a hacer un componente llamado Saludo. Este componente recibirá un prop llamado mensaje y lo mostrará en pantalla.
Explicación:
Props: Son un mecanismo para pasar datos desde un componente padre a un componente hijo. En este caso, Saludo recibe un prop llamado mensaje.
Cómo acceder: Dentro del componente Saludo, los props se acceden mediante props.mensaje.

*/