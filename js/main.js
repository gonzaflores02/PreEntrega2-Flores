function Producto(nombre, precio, stock, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
}

let productos = [];

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("foto").value = "";
}

function mostrarProducto(){
    const listado = document.getElementById("listadoProductos");

    listado.innerHTML = "";

    if(productos.length <= 0){
        listado.innerHTML = "<p>No has agregado ningún producto a tu catálogo.</p>"; 
    }else{
        productos.forEach(el => {
            listado.innerHTML += 
            `<div class="producto">
                <img src="${el.foto}" alt="Imagen de ${el.nombre}" class="producto-img">
                <h3>${el.nombre}</h3>
                <p>Precio: ${el.precio} $ARS</p>
                <p>Stock: ${el.stock} unidades</p>
            </div>`
            ;})
    }
}

function mostrarAlerta(){
    const alerta = document.getElementById("alertContainer");
    alerta.innerHTML = `<p class="alert alert-danger">Complete los campos correctamente</p>`
}

function guardarEnLS(arr){
    return localStorage.setItem('usuario', JSON.stringify(arr));
}

function CrearProducto(){
    let nombre = document.getElementById("nombre").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let stock= parseFloat(document.getElementById("stock").value);
    let foto = document.getElementById("foto").value;

    if(nombre === "" || isNaN(precio) || isNaN(stock) || foto === ""){
        mostrarAlerta()
        return
    }

    const NuevoProducto = new Producto(nombre, precio, stock, foto);
    productos.push(NuevoProducto);
    

    

    limpiarFormulario()
    mostrarProducto()

}



































function validacionNumero(aValidar) {
    aValidar = parseFloat(aValidar);
    
    while (isNaN(aValidar)) {
        aValidar = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    return aValidar;
}

