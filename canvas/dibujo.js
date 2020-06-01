function dibujarLinea (color, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();

}

// para obtener el id del archivo html se coloca document. getElementById. ES UN METODOO DEL DOCUMENTO QUE TRAE ELEMENTO A TRAVES DEL ID. PASAMOS PARAMETRO
let d = document.getElementById ("dibujito");
// getContexte funcion del obejto canvas, permite obetner area donde voy a dibjuar 3D o 2D
let lienzo =d.getContext("2d");

dibujarLinea ("pink", 100, 0, 150,200);
dibujarLinea ("purple", 100, 0, 50,200);
dibujarLinea ("grey", 75, 100, 126,100);



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



