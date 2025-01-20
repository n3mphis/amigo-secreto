let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;

    if (nombre === "") {
        alert('Por favor, ingrese un nombre!');
    } else {
        amigos.push(nombre);
        limpiarLista();
        console.log(amigos);
    }
}

function limpiarLista() {
    document.querySelector('#amigo').value = '';
}

/* function recorrerArray(arr) {
    const lista = document.getElementById('listaAmigos').value;
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML = <li>amigos[i]</li>;
    }
} */