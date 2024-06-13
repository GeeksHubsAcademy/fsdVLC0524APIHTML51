const bienvenida = document.getElementById("bienvenida");

//Voy a obtener los datos del localStorage....

let datos = JSON.parse(localStorage.getItem("preferences"));

bienvenida.innerHTML = `Hola, eres ${!datos?.name ? "X" : datos.name}, tu modo favorito es ${datos?.mode} y buscar mucho usando ${datos?.common}`;
