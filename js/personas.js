let personas = [];



let formulario = document.getElementById("formulario");

let tabla = document.getElementById("tablaPersonas");





formulario.addEventListener("submit", function(event){


    event.preventDefault();



    let persona = {


        nombre: document.getElementById("nombre").value,


        apellido: document.getElementById("apellido").value,


        edad: Number(document.getElementById("edad").value),


        altura: Number(document.getElementById("altura").value),


        peso: Number(document.getElementById("peso").value)



    };



    personas.push(persona);



    mostrarPersonas();



    formulario.reset();



});





function calcularIMC(peso, altura){


    return (peso / (altura * altura)).toFixed(2);


}





function mostrarPersonas(){


    tabla.innerHTML = "";



    personas.forEach(function(persona, indice){



        let fila = document.createElement("tr");



        fila.innerHTML = `


        <td>${persona.nombre}</td>


        <td>${persona.apellido}</td>


        <td>${persona.edad}</td>


        <td>${persona.altura}</td>


        <td>${persona.peso}</td>


        <td>${calcularIMC(persona.peso, persona.altura)}</td>


        <td>

        <button onclick="eliminarPersona(${indice})">

        Eliminar

        </button>

        </td>


        `;



        tabla.appendChild(fila);



    });


}







function eliminarPersona(indice){


    personas.splice(indice,1);


    mostrarPersonas();


}