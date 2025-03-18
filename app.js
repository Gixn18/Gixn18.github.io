let amigos = [];

function agregarAmigo() 
 {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim(); 
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); 
        return; 
    }
    amigos.push(nombre); 
    inputNombre.value = "";
    actualizarListaVisual();
 }

function actualizarListaVisual() 
 {
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 
    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = amigo; 
        listaAmigos.appendChild(itemLista); 
    });
 }

function sortearAmigo() 
 {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; 
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
 } 