// esto es un comentario de una sola linea.
/* Esto es
un comentario
en varias
lineas */

let miNombre = prompt("Introduzca su nombre");
/* if (miNombre === "Pepito Grillo"){
  alert("saludos, SR. Grillo");
}else {
  alert("Usted no es el usuario deseado");
} */
if (miNombre === "Pepito Grillo"){
  alert("saludos, SR. Grillo");
}
while (miNombre !== "Pepito Grillo") {
  alert("Usted no es el usuario deseado");
  miNombre = prompt("Vuelva a introducir su nombre");
}