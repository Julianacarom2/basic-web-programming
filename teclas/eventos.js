var teclas = 
{
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39
};
console.log (teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea ("red", 149,149,151,151,papel);


function dibujarLinea (color, x_ini, y_ini, x_fin, y_fin,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3; 
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;
    switch (evento.keyCode)
    {
        case teclas.UP:
           dibujarLinea (colorcito, x, y, x, y-movimiento, papel)
           y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea (colorcito, x, y, x, y+movimiento, papel )
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea (colorcito, x, y, x- movimiento, y, papel )
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea (colorcito, x, y, x+movimiento, y, papel )
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }
} 
 
