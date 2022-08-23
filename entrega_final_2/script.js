let cartas = document.getElementById("cartas");
const contenedorCarrito=document.getElementById("items");
let modal =document.getElementById("modal-body");
let carrito = [];

//PRODUCTOS
const productos = [
    {id: 1, titulo: "dragon ball super v15", tipo:"manga", precio: 1200 ,imagen:"./img/VOLUMEN15.jpg"},
    {id: 2, titulo: "dragon ball super v10", tipo:"manga", precio: 1600 ,imagen:"./img/VOLUMEN10.jpg"},
    {id: 3, titulo: "dragon ball super v12", tipo:"manga", precio: 1300 ,imagen:"./img/VOLUMEN12.jpg"},
    {id: 4, titulo: "dragon ball super v11", tipo:"manga", precio: 1400 ,imagen:"./img/VOLUMEN11.jpg"},
    {id: 5, titulo: "dragon ball super v18", tipo:"manga", precio: 1600 ,imagen:"./img/VOLUMEN18.jpg"},
    {id: 6, titulo: "dragon ball super v17", tipo:"manga", precio: 1600 ,imagen:"./img/VOLUMEN17.jpg"}
]

//CARTAS CON PRODUCTOS
productos.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>
    <h6 class="precio">${producto.precio}</h6>
    <p class="card-text">${producto.tipo}</p>
    <button id="agregar ${producto.id}" class="btn btn-primary">COMPRAR<i class="fas fa-shopping-cart"></i></button>
    </div>
    </div>
    `;
    
    cartas.appendChild(div)
    
    const boton = document.getElementById(`agregar ${producto.id}`);
    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id);
    })
})


let agregarAlCarrito = (prodId)=>{
    const item = productos.find((prod)=> prod.id ===prodId);
    carrito.push(item);
    actualizar();
    console.log(carrito);   
}

const actualizar = () =>{

    carrito.forEach((prod)=>{

        const div=document.createElement("div");
        div.className = ("productoEnCarrito");
    
        div.innerHTML =`  <tr>
                        <td>${prod.id}</td>
                        <td>${prod.titulo}</td>
                        <td>${prod.precio}</td>
                        </tr>
                    `;
            contenedorCarrito.appendChild(div)
            localStorage.setItem("carrito: ",JSON.stringify(carrito));
    })

}

