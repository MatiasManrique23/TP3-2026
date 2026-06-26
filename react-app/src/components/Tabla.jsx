function Tabla({ personas, eliminarPersona, calcularIMC }) {

  return (
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

        {personas.map((p, index) => (
          <tr key={index}>

            <td>{p.nombre}</td>
            <td>{p.apellido}</td>
            <td>{p.edad}</td>
            <td>{p.altura}</td>
            <td>{p.peso}</td>
            <td>{calcularIMC(p.peso, p.altura)}</td>

            <td>
              <button onClick={() => eliminarPersona(index)}>
                Eliminar
              </button>
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default Tabla;