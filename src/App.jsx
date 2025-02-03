import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CambioColor from './components/CambioColor';
import Contador from './components/Contador';
import Saludo from "./components/Saludo";
import Usuario from './components/Usuario';
import PersonaCard from './components/PersonaCard';
import productos from './data/productos';
import Producto from './components/Producto';
import OcultarTexto from './components/OcultarTexto';


function App() {
  const [count, setCount] = useState(0)
  const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 30 },
    { nombre: "Ana", apellido: "García", edad: 25 },
    { nombre: "Luis", apellido: "Martínez", edad: 40 },
    { nombre: "María", apellido: "López", edad: 35 },
  ];
  return (
    <>
      <div className="container-fluid">
        <h2>Sesión 6 Ejemplos</h2>
        <h3>Usestate</h3>
        {/* Contador */}
        <Contador />
        <h3>Cambio de color</h3>
        <div>
          {/* Cambio de color de caja */}
          <CambioColor />
        </div>
        <div>
          {/* Props saludo */}
          <h2>Props Tutorial</h2>
          <Saludo mensaje="¡Hola, React desde App!" />
        </div>
        <div>
          {/* Props lista de usuarios */}
          <h1>Lista de Usuarios</h1>
          <Usuario nombre="Juan" edad={30} />
          <Usuario nombre="Ana" edad={25} />
          <Usuario nombre="Luis" edad={40} />
        </div>
        <div className="container mt-4">
          <h1 className="mb-4">Lista de Personas</h1>
          <div className="row">
            {personas.map((persona, index) => (
              <div className="col-md-4" key={index}>
                <PersonaCard
                  nombre={persona.nombre}
                  apellido={persona.apellido}
                  edad={persona.edad}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Productos */}
      <div style={{ padding: "20px" }}>
        {/* props Productos */}
        <h1>Lista de Productos</h1>
        {productos.map((producto, index) => (
          <Producto
            key={index}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
      {/* Ocultar Texto */}
      <div>
        <h1>Ocultar Texto</h1>
        <OcultarTexto />
      </div>
    </>
  );
}

export default App
