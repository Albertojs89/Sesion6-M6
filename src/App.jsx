import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CambioColor from './CambioColor';
import Contador from './Contador';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
        <h2>Sesión 6 Ejemplos</h2>
        <h3>Usestate</h3>
        <Contador />
        <h3>Cambio de color</h3>
        <div>
          <CambioColor />
        </div>
      </div>
    </>
  );
}

export default App
