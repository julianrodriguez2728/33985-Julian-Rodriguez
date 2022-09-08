function obtenerDatos(){
    const URLGET = "https://api.itbook.store/1.0/new";
    fetch(URLGET)
    .then(resultado => resultado.json())
    .then(libros =>{
        libros.books.forEach(libro => {
            document.getElementById("libros").innerHTML+=`
            <tr>
                <td>${libro.title}</td>
                <td><img src="${libro.image}"</td>
            </tr>   
            `;
        });
    })

}
obtenerDatos()

function jsonLocal(){
    const URLJSON="users.json";
    fetch(URLJSON)
        .then ( respuesta => respuesta.json())
        .then ( empleados => console.log(empleados))
}
jsonLocal();