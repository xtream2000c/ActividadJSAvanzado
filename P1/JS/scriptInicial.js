window.onload = main;

function main() {
    
    document.getElementById("formulario").addEventListener("submit", comenzarJuego, false);

}

function comenzarJuego(event) {
    event.preventDefault();

    var jugador1 = document.getElementById("jugador1").value;
    var jugador2 = document.getElementById("jugador2").value;
    var modo = document.getElementById("modo").value;

    var infoPartida = [
        jugador1,
        jugador2,
        modo
    ]

    sessionStorage.setItem("informacionPartida", JSON.stringify(infoPartida));

    location.href = 'juego.html';
}