window.onload = main();

function main() {
    
    alert(document.getElementById("imagen1").getAttribute("src"));
    document.getElementById("imagen1").addEventListener("click", cambiaImagen);
    document.getElementById("imagen2").addEventListener("click", cambiaImagen);
    document.getElementById("imagen3").addEventListener("click", cambiaImagen);
    document.getElementById("imagen4").addEventListener("click", cambiaImagen);

}

function cambiaImagen() {
    alert(this.getAttribute("src"));
    document.getElementsByClassName("imagen").getAttribute('src')=this.getAttribute('src');
}