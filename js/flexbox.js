let elementos = [

"HTML",

"CSS",

"JavaScript",

"React",

"Git",

"GitHub"

];



let contenedor = document.getElementById("contenedor");



function mostrarTarjetas(){


    contenedor.innerHTML="";


    elementos.forEach(function(elemento){


        let tarjeta = document.createElement("div");


        tarjeta.className="tarjeta";


        tarjeta.innerHTML = `

        <h3>${elemento}</h3>

        <p>
        Tecnologia web
        </p>

        `;


        contenedor.appendChild(tarjeta);


    });


}



mostrarTarjetas();




document.getElementById("ordenar")
.addEventListener("click",function(){


    elementos.sort();


    mostrarTarjetas();


});