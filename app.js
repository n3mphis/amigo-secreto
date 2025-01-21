let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;

    if (nombre === "") {
        alert('Por favor, ingrese un nombre!');
    } else {
        amigos.push(nombre);
        console.log(amigos);
        recorrerArray(amigos);
        limpiarLista();
    }
}

function limpiarLista() {
    document.querySelector('#amigo').value = '';
} 

function recorrerArray() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

