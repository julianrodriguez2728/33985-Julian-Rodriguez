// ingresar Nombre de Alumnos

let alumnos=prompt("Ingresa los nombres de los alumnos (Presionar (l/L) para finalizar: ");
let ingresados="";

while((alumnos !="l")&&(alumnos !="L")){
    ingresados=ingresados+"\n"+"-"+alumnos;
    alumnos=prompt("Ingresa los nombres de los alumnos (Presionar (l/L) para finalizar: ");
}
console.log("Alumnos:   "+ingresados);


const promedio =() =>{
    alert("Ingresa las notas de cada trimestre");

    let primer =parseFloat(prompt("Ingrese la nota del 1er trimestre: "));
    let segundo =parseFloat(prompt("Ingrese la nota del 2ndo trimestre: "));
    let tercer =parseFloat(prompt("Ingrese la nota del 3er trimestre: "));
    let total = primer +segundo +tercer;

    if((total<30)&&(total>20)){
        alert("🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert("👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}

promedio();