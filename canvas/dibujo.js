// para obtener el id del archivo html se coloca document. getElementById. ES UN METODOO DEL DOCUMENTO QUE TRAE ELEMENTO A TRAVES DEL ID. PASAMOS PARAMETRO
let d = document.getElementById ("dibujito");
// getContexte funcion del obejto canvas, permite obetner area donde voy a dibjuar 3D o 2D
let lienzo =d.getContext("2d");
//  LIENZO CONTEXTO 2D 

// para empezar a dibujar = lapiz sobre "papel", para invocar funcione necesitan paratensis de apertura y cierre.
lienzo.beginPath();
// atributo o propiedad del objeto
lienzo.strokeStyle = "red";
// mover al punto 100, 100 del canvas
lienzo.moveTo(100, 0);
// linea diaganol hasta el punto 200, 200
lienzo.lineTo(150, 200);
lienzo.moveTo(100, 0);
lienzo.lineTo(50, 200);
lienzo.moveTo(75, 100);
lienzo.lineTo(126, 100);
// cerrar linea
lienzo.stroke();
// terminamos de dibujar = levantar lapiz
lienzo.closePath();

