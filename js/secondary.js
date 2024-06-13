const bienvenida = document.getElementById("bienvenida");

//Voy a obtener los datos del localStorage....

let datos = JSON.parse(localStorage.getItem("preferences"));

let inputs = document.getElementsByTagName("input")
let inputsArray = Array.from(inputs)

inputsArray.map(
    cadaUno => {
        cadaUno.value = datos[cadaUno.name]
                        // datos.name en la primera vuelta
                        // datos.mode en la segunda vuelta
                        // datos.searchEngine en la tercera vuelta
    }
)

// bienvenida.innerHTML = `Hola, eres ${!datos?.name ? "X" : datos.name}, tu modo favorito es ${datos?.mode} y buscar mucho usando ${datos?.common}`;
