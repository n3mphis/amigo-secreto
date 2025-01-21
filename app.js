//Array vacío creado
let amigos = [];
//Función para agregar amigos creada
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;

    if (nombre === "") {
        alert('Por favor, ingrese un nombre!');
    } else {
        amigos.push(nombre);
        recorrerArray(amigos);
        limpiarLista();
    }
}
//Función para limpiar la lista luego de agregar un amigo
function limpiarLista() {
    document.querySelector('#amigo').value = '';
} 
//Función para recorrer el array y agregar un nombre a la lista (li)
function recorrerArray() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
//Función para sortear un amigo y mostrar el resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista esta vacía!!');
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length) + 1;
    let resultado = amigos[indiceAleatorio];
    console.log(indiceAleatorio);
    document.getElementById('resultado').innerHTML = "El amigo elegido es: " + resultado;
}
