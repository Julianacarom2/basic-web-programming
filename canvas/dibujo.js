
// para obtener el id del archivo html se coloca document. getElementById. ES UN METODOO DEL DOCUMENTO QUE TRAE ELEMENTO A TRAVES DEL ID. PASAMOS PARAMETRO
let d = document.getElementById ("dibujito");
// getContexte funcion del obejto canvas, permite obetner area donde voy a dibjuar 3D o 2D
let lienzo =d.getContext("2d");
let linea = 30;
let l = 0;
let yi, xf;
let color_1 = "#FAA";

while ( l < linea)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea (color_1, 0, yi, xf,300);
    l = l+1;

}

dibujarLinea (color_1, 1,1,1,299);
dibujarLinea (color_1, 1,299,299,299);


function dibujarLinea (color, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();

}






// // para empezar a dibujar = lapiz sobre "papel", para invocar funcione necesitan paratensis de apertura y cierre.
// lienzo.beginPath();
// // atributo o propiedad del objeto
//  lienzo.strokeStyle = "red";
// // mover al punto 100, 100 del canvas
//  lienzo.moveTo(100, 0);
// // linea diaganol hasta el punto 200, 200
//  lienzo.lineTo(150, 200);
//  lienzo.moveTo(100, 0);
//  lienzo.lineTo(50, 200);
//  lienzo.moveTo(75, 100);
//  lienzo.lineTo(126, 100);
// // cerrar linea
//  lienzo.stroke();
// // terminamos de dibujar = levantar lapiz
// lienzo.closePath();



