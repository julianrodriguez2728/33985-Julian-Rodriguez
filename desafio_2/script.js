let miNombre=prompt("Ingresa tu Nombre Completo y Apellido de a uno(Pulsa L para finalizar");

let edadActual=parseInt(prompt("Ingresa tu Año de nacimiento:"));

let edadContada= (2022 - edadActual);

while(miNombre!="l"){

if(edadContada){

console.log("Nombre: "+ miNombre);

console.log("Edad: "+ edadContada);
break;

}else {

alert("Error, Ingresar tu año de nacimiento");

break;

}

}