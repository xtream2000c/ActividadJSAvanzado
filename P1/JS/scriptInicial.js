window.onload = main;

function main() {
    
    document.getElementById("formulario").addEventListener("submit", comenzarJuego, false);

}

function comenzarJuego(event) {
    event.preventDefault();

    var jugador1 = document.getElementById("jugador1").value;
    var jugador2 = document.getElementById("jugador2").value;
    var modo = document.getElementById("modo").value;
    var victoriasJ1 = 0;
    var victoriasJ2 = 0;
    var bRevancha = 0;

    var infoPartida = [
        jugador1,
        jugador2,
        modo,
        victoriasJ1,
        victoriasJ2,
        bRevancha
    ]

    sessionStorage.setItem("informacionPartida", JSON.stringify(infoPartida));

    location.href = 'juego.html';
}