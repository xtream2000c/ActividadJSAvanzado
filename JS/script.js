window.onload = main;
function main() {

    var t = document.getElementById("tabla"),
        f = t.getElementsByTagName("tr");
        

    for (var i = 0; i < f.length; i++) {

        var c = f[i].getElementsByTagName("td");

        for (var j = 0; j < c.length; j++) {
            
            c[j].innerHTML="<img src='Resources/blanco.gif'>";

        }
        
    }
}