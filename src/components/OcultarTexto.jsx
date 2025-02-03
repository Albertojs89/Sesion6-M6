import { useState } from "react";

function OcultarTexto() {
  // Estado para controlar la visibilidad del texto
  const [isVisible, setIsVisible] = useState(true);

  // Función que cambia el estado al hacer clic
  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Botón con texto condicional sin ternario */}
      <button onClick={toggleText}>
        {isVisible === true ? "Ocultar" : "Mostrar"}
      </button>

      {/* Mostrar el texto usando un if dentro de JSX */}
      {isVisible === true ? <p>¡Hola! Este es un texto visible.</p> : null}
    </div>
  );
}

export default OcultarTexto;
