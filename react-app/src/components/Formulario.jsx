import { useState } from "react";

function Formulario({ agregarPersona }) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nuevaPersona = {
      nombre,
      apellido,
      edad: Number(edad),
      altura: Number(altura),
      peso: Number(peso)
    };

    agregarPersona(nuevaPersona);

    setNombre("");
    setApellido("");
    setEdad("");
    setAltura("");
    setPeso("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <input
        placeholder="Edad"
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <input
        placeholder="Altura"
        type="number"
        step="0.01"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <input
        placeholder="Peso"
        type="number"
        step="0.01"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <button type="submit">
        Agregar
      </button>

    </form>
  );
}

export default Formulario;