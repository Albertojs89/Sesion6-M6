import { useState } from "react";

/*
USESTATE EJEMPLO DE CONTADOR INCREMENTAR Y DISMINUIR-------------------
contador: Es la variable que contiene el valor actual del estado. Empieza en 0.
setContador: Es la función que vamos a utilizar para actualizar el valor del contador.
useState(0): Le dice a React que el valor inicial del estado es 0.


*/
function Contador() {
  const [contador, setContador] = useState(0);

  //creacion de dos funciones arrow para incrementar y disminuir
  const incrementar = () => {
    setContador(contador + 1);
  };
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert("No puedes disminuir más");
    }
  };

  //renderizado de la interfaz
  return (
    <div>
      <h2>Contador</h2>
      <p>Este es el contador es: {contador}</p>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
}


export default Contador;