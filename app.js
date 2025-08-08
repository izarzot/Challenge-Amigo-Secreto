// 1) Crear un array para almacenar los nombres
let amigos = [];

// 2) Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // trim() elimina espacios en blanco al inicio y final
    
    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si no hay nombre válido
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
    
    // Llamar a la función para actualizar la lista visual
    actualizarListaAmigos();
}

// 3) Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
    
    // Iterar sobre el arreglo usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

// 4) Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Por favor, agregue al menos un nombre.");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Funcionalidad adicional: permitir agregar nombres con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
