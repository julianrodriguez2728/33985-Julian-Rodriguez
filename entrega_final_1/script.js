const alumnos=[];
console.log(alumnos);

alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 4): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 4): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 4): "));
alumnos.push(prompt("Ingresa el nombre de un estudiante(Maximo 4): "));


const alumno1= alumnos.slice(0,1);
const alumno2= alumnos.slice(1,2);
const alumno3= alumnos.slice(2,3);
const alumno4= alumnos.slice(3,4);


alert("Ingresa las notas de cada trimestre");
let primer =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 1er trimestre: "));
let segundo =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 2ndo trimestre: "));
let tercer =parseFloat(prompt(alumno1+" "+"Ingrese la nota del 3er trimestre: "));
let total = primer +segundo +tercer;

alert("Ingresa las notas de cada trimestre");

let primer2 =parseFloat(prompt(alumno2+" "+"  1er trimestre: "));
let segundo2 =parseFloat(prompt(alumno2+" "+"  2ndo trimestre: "));
let tercer2 =parseFloat(prompt(alumno2+" "+"  3er trimestre: "));
let total2 = primer2 +segundo2 +tercer2;

alert("Ingresa las notas de cada trimestre");

let primer3 =parseFloat(prompt(alumno3+" "+"  1er trimestre: "));
let segundo3 =parseFloat(prompt(alumno3+" "+"  2ndo trimestre: "));
let tercer3 =parseFloat(prompt(alumno3+" "+"  3er trimestre: "));
let total3 = primer3 +segundo3 +tercer3;

alert("Ingresa las notas de cada trimestre");

let primer4 =parseFloat(prompt(alumno4+" "+"  1er trimestre: "));
let segundo4 =parseFloat(prompt(alumno4+" "+"  2ndo trimestre: "));
let tercer4 =parseFloat(prompt(alumno4+" "+"  3er trimestre: "));
let total4 = primer4 +segundo4 +tercer4;



const promedio =() =>{
    primer;
    segundo;
    tercer;
    total;
    

    if((total<=30)&&(total>20)){
        alert(alumno1+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total);
    }else{
        alert(alumno1+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total)
    }
}
const promedio2 =() =>{

    primer2;
    segundo2;
    tercer2;
    total2;

    if((total2<=30)&&(total2>20)){
        alert(alumno2+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total2);
    }else{
        alert(alumno2+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total2)
    }
}
const promedio3=() =>{
    primer3;
    segundo3;
    tercer3;
    total3;

    if((total3<=30)&&(total3>20)){
        alert(alumno3+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total3);
    }else{
        alert(alumno4+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total3)
    }
}
const promedio4 =() =>{
    primer4;
    segundo4;
    tercer4;
    total4;

    if((total4<=30)&&(total4>20)){
        alert(alumno4+"🤟Aprobado 🥳🥳 "+"su promedio total es de "+ total4);
    }else{
        alert(alumno4+"👎👎Desaprobado 😓😓 "+"su promedio total es de "+ total4);
    }
}
const ingresados=[
    {

alumno:alumno1,total

    },
    {
alumno: alumno2,total2
    },
    {
alumno: alumno3,total3
    },
    {
alumno: alumno4,total4
    }
]

let busqueda=prompt("Buscar alumno: ");

const buscar = ingresados.find((el)=> el.alumno==busqueda);

console.table(buscar);

console.log(alumno1,promedio);
console.log(alumno2,promedio2);
console.log(alumno3,promedio3);
console.log(alumno4,promedio4);


promedio();
promedio2();
promedio3();
promedio4();
