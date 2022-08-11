let header= document.getElementById("header");
console.log(header.innerHTML);
header.style.background="violet"

let titulo = document.getElementById("titulo");
titulo.style.font="bold 40px helvetica"



const alumnos=[
    {id: 1, nombre:"julian rodriguez", nota: 9},
    {id: 2, nombre:"emanuel sanchez", nota: 10},
    {id: 3, nombre:"lautaro martinez", nota: 6},
    {id: 4, nombre:"benjamin silva", nota:8}];

let alumnosBuscados =document.getElementById("buscar");
let notaAlumnos= document.getElementById("notas");
alumnosBuscados.value= "emanuel sanchez";
notaAlumnos.value= alumnos.length;



let tabla=document.createElement("table");
tabla.className="table table-striped table-dark"
let tablaBody=document.createElement("tbody");

for (const alumno of alumnos){
    tablaBody.innerHTML+=`
    <tr>
        <td>${alumno.id}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.nota}</td>
    </tr>
    `;
}
tabla.append(tablaBody);

let cuadrilla = document.getElementById("cuadrilla");
cuadrilla.append(tabla);
