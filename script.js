const alumnos=[];
console.log(alumnos);

alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 5): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 5): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 5): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 5): "));




const promedio =() =>{
    alert("Ingresa las notas de cada trimestre");

    let primer =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 1er trimestre: "));
    let segundo =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 2ndo trimestre: "));
    let tercer =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 3er trimestre: "));
    let total = primer +segundo +tercer;

    if((total<=30)&&(total>20)){
        alert(alumno1+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert(alumno1+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}
const promedio2 =() =>{
    alert("Ingresa las notas de cada trimestre");

    let primer =parseFloat(prompt(alumno2+" "+"  1er trimestre: "));
    let segundo =parseFloat(prompt(alumno2+" "+"  2ndo trimestre: "));
    let tercer =parseFloat(prompt(alumno2+" "+"  3er trimestre: "));
    let total = primer +segundo +tercer;

    if((total<=30)&&(total>20)){
        alert(alumno2+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert(alumno2+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}
const promedio3=() =>{
    alert("Ingresa las notas de cada trimestre");

    let primer =parseFloat(prompt(alumno3+" "+"  1er trimestre: "));
    let segundo =parseFloat(prompt(alumno3+" "+"  2ndo trimestre: "));
    let tercer =parseFloat(prompt(alumno3+" "+"  3er trimestre: "));
    let total = primer +segundo +tercer;

    if((total<=30)&&(total>20)){
        alert(alumno3+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert(alumno4+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}
const promedio4 =() =>{
    alert("Ingresa las notas de cada trimestre");

    let primer =parseFloat(prompt(alumno4+" "+"  1er trimestre: "));
    let segundo =parseFloat(prompt(alumno4+" "+"  2ndo trimestre: "));
    let tercer =parseFloat(prompt(alumno4+" "+"  3er trimestre: "));
    let total = primer +segundo +tercer;

    if((total<=30)&&(total>20)){
        alert(alumno4+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert(alumno4+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}
const ingresados=[
    {
alumno1
    },
    {
alumno2
    },
    {
alumno3
    },
    {
alumno4
    }
]
console.log(ingresados);
const alumno1= alumnos.slice(0,1);
const alumno2= alumnos.slice(1,2);
const alumno3= alumnos.slice(2,3);
const alumno4= alumnos.slice(3,4);
console.log(alumno1,promedio);
console.log(alumno2,promedio2);
console.log(alumno3,promedio3);
console.log(alumno4,promedio4);



promedio();
promedio2();
promedio3();
promedio4();
