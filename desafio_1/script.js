let nombre=prompt("Ingresa tu nombre: ");
let apellido=prompt("ingresa tu apellido: ")
const anioActual=2022;
let edadActual=parseInt(prompt("Ingresa tu Año de nacimiento: "));
let edadContada=(anioActual-edadActual);


if((nombre !="")&&(apellido !="")){
    alert("Nombre: "+nombre+"\nApellido:"+apellido+"\nEdad: "+edadContada);
}else {
    alert("Error, Ingresar todos los datos.")
}


