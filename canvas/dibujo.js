// para obtener el id del archivo html se coloca document. getElementById. ES UN METODOO DEL DOCUMENTO QUE TRAE ELEMENTO A TRAVES DEL ID. PASAMOS PARAMETRO
let texto = document.getElementById ("texto_lineas");
let boton = document.getElementById ("boton1");
// responde al evento de click y se le indica cual es el nombre de la funcion por eso se pone sin ()
boton.addEventListener("click", dibujoPorClick);

let d = document.getElementById ("dibujito");
// getContexte funcion del obejto canvas, permite obetner area donde voy a dibjuar 3D o 2D
let lienzo =d.getContext("2d");
let linea = 30;
let l = 0;
let yi, xf;
let x,  y;
let color_1 = "#FAA";
let color_2 = "yellow";

// ciclo for utiliza 3 paramentros, se  separa cada parametro con ;, l++ es igual a l= l+1
for ( l=0 ; l < linea ; l++)
{   
    x = 10 * (l+1);
    y = 10 * l;
    yi = 10 * (l+1);
    xf = 10 * l;
    dibujarLinea (color_1, 0, yi, xf,300);
    dibujarLinea (color_2, 300, yi, xf,0);
    
   
}

dibujarLinea (color_1, 1,1,1,299);
dibujarLinea (color_1, 1,299,299,299);
dibujarLinea (color_2, 299,1,1,1);
dibujarLinea (color_2, 299,299,299,1);


function dibujarLinea (color, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick()
{
    alert ("no me toques");
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



