import { useState } from "react";


function CambioColor() {
  // Estado para el color de fondo, inicialmente blanco
  const [colorFondo, setColorFondo] = useState("white");

  // Función para cambiar el color de fondo
  const cambiarColor = () => {
    // Cambiar aleatoriamente el color de fondo
    const colores = ["red", "green", "blue", "yellow", "pink", "purple"];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColorFondo(nuevoColor);
  };

  return (
    <div style={{ backgroundColor: colorFondo }}>
      <h1>Cambia el color de fondo</h1>
      <button onClick={cambiarColor}>¡Cambiar Color!</button>
    </div>
  );
}



/*
Explicación del código:
Estado colorFondo:

const [colorFondo, setColorFondo] = useState('white');: 
Inicialmente, el color de fondo es blanco.
colorFondo contiene el valor actual del color, y setColorFondo es la función para actualizar este valor.
Función cambiarColor:

Creamos un array de colores (colores).
Seleccionamos un color aleatorio de ese array utilizando Math.random() y Math.floor() para elegir un índice de manera aleatoria.
Luego, actualizamos el estado con setColorFondo(nuevoColor).
Cambio de color de fondo:

Usamos el atributo style={{ backgroundColor: colorFondo }} en el div principal para cambiar dinámicamente el color de fondo. La propiedad backgroundColor tomará el valor de colorFondo, que irá cambiando al hacer clic en el botón.
Resultado esperado:
Inicialmente, el fondo será blanco.
Cada vez que se haga clic en el botón "¡Cambiar Color!", el fondo cambiará a un color aleatorio del array de colores.



*/


export default CambioColor;