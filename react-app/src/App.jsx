import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";

function App() {

  const [personas, setPersonas] = useState([]);

  function agregarPersona(persona) {
    setPersonas([...personas, persona]);
  }

  function eliminarPersona(index) {
    const nuevos = personas.filter((_, i) => i !== index);
    setPersonas(nuevos);
  }

  function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  return (
    <div>

      <h1>Personas con React</h1>

      <Formulario agregarPersona={agregarPersona} />

      <Tabla
        personas={personas}
        eliminarPersona={eliminarPersona}
        calcularIMC={calcularIMC}
      />

    </div>
  );
}

export default App;