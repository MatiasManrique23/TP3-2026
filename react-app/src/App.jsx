import { useState } from "react";

function App() {

  const [personas, setPersonas] = useState([]);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function agregarPersona(e) {
    e.preventDefault();

    const nueva = {
      nombre: form.nombre,
      apellido: form.apellido,
      edad: Number(form.edad),
      altura: Number(form.altura),
      peso: Number(form.peso)
    };

    setPersonas([...personas, nueva]);

    setForm({
      nombre: "",
      apellido: "",
      edad: "",
      altura: "",
      peso: ""
    });
  }

  function eliminar(index) {
    setPersonas(personas.filter((_, i) => i !== index));
  }

  function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  return (
    <div>

      <h1>Personas React</h1>

      {/* FORM IMPORTANTE */}
      <form onSubmit={agregarPersona}>

        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
        <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" />
        <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" />
        <input name="altura" value={form.altura} onChange={handleChange} placeholder="Altura" />
        <input name="peso" value={form.peso} onChange={handleChange} placeholder="Peso" />

        {/* BOTÓN IMPORTANTE */}
        <button type="submit">
          Agregar
        </button>

      </form>

      <table border="1">

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>IMC</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>

          {personas.map((p, i) => (
            <tr key={i}>
              <td>{p.nombre}</td>
              <td>{p.apellido}</td>
              <td>{p.edad}</td>
              <td>{p.altura}</td>
              <td>{p.peso}</td>
              <td>{imc(p.peso, p.altura)}</td>
              <td>
                <button onClick={() => eliminar(i)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;