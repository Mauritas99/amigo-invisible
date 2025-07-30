// Pasos a seguir:

// 1. Agregar funcionalidad "Añadir amigo", para que el usuario pueda completar el input y agregar el nombre a una lista de participantes.  LISTO!
// 2. Mostrar dinamicamente la lista de participantes, cuando un usuario agregue un nuevo participante, mostrarlo en el texto dinamico debajo del input.  LISTO!
// 3. Si el input se encuentra vacio, mostrar una alerta que advierta al usuario de su acción (no permitir enviar un string vacio a la lista de participantes).  LISTO!
// 4. Al tocar "Sortear amigo", seleccionar de manera aleatoria un participante de la lista y mostrarlo en pantalla.


// Variables globales

let participantes = [];
let botonReinicio = document.querySelector(".boton-reiniciar");

function obtenerNombre(){
    let nombre = document.querySelector("input").value;

    if (nombre != ""){
        participantes.push(nombre);
        // Verificar estado de boton "Reinciar"
        if(botonReinicio.hasAttribute("disabled")){
            botonReinicio.disabled = false;
        }
        document.querySelector("input").value = "";
        actualizarTextoDin();
    } else{
        alert("Porfavor, recordá llenar el campo para agregar un amigo!");
    }
}

function actualizarTextoDin (){
    let textoDinamico = document.getElementById("texto-dinamico");

    textoDinamico.innerHTML = participantes;
}

function SortearAmigo(){
    // Para empezar a jugar, hay que corroborar que:
    // 1. Hayan almenos 3 personas en la lista. LISTO!
    // 2. No puede sortearse 2 veces seguidas, se sortea y hay que reiniciar el juego.
    // 3. Se deben mostrar los participantes en el texto dinámico, y limpiar para reiniciar el juego.
    // 4. Mostrar quien es el ganador.

    if (participantes.length > 2){
        numeroAleatorio = Math.floor(Math.random() * participantes.length) + 1;
        participanteGanador = participantes[numeroAleatorio];
        
    } else{
        alert(`Porfavor, agrega ${3 - participantes.length} ${participantes.length == 2 ? "amigo" : "amigos"} mas para poder jugar!`);
    }
}
function reiniciarJuego(){
    alert("Espera wachin!");
}