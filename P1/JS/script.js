window.onload = main;
var turnos = 0;
function main() {

    var tabla = document.getElementById("tabla");
    var filas = 3;
    var columnas = 3;
    
    
    document.getElementById("turno").innerHTML= "Turno de: Jugador 1";

    for (var i = 0; i < filas; i++) {

        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
            
            var celda = fila.insertCell();
            celda.id=i+''+j;
            celda.innerHTML="<img src='Resources/blanco.gif'>";
            celda.className="vacio";
            celda.addEventListener('click', compruebaOcupada);
            
        }
    }

}

function compruebaOcupada(){
    ocupada = this.className;
    if(ocupada !="vacio"){
        alert("Esa celda ya esta ocupada");
    }else{
        turno(this.id);
    }
}

function turno(id){
    
    var celdaSeleccionada = document.getElementById(id);
    
    if(turnos%2==0){
        
        document.getElementById("turno").innerHTML= "Turno de: Jugador 2";
        celdaSeleccionada.innerHTML="<img src='Resources/equis.jpg'>";
        celdaSeleccionada.className="Jugador1";

    }else{
        document.getElementById("turno").innerHTML= "Turno de: Jugador 1";
        celdaSeleccionada.innerHTML="<img src='Resources/circulo.jpg'>";
        celdaSeleccionada.className="Jugador2";
        
    }
    turnos+=1;
    
}

function ganado() {

    var jugador

    if(turnos%2==0){
        
        jugador="Jugador1";

    }else{
        
        jugador="Jugador2";
        
    }

    document.getElementById("turno").innerHTML= "Ha ganado: " + jugador;
}