function Producto(nombre, precio, stock, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
}

let productos = [];

while(true){
    let pregunta = prompt("Quieres agregar un producto para la venta?, Si o No")
    if (pregunta == "Si" || pregunta == "si"){
        alert("Bien, vamos a agregar los productos");
        let nombre = prompt("Ingresa el nombre del producto");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let stock = parseFloat(prompt("Ingresa que cantidad del producto hay disponible"));
        let foto = prompt("Ingresa el nombre de la imagen del producto");

        const NuevoProducto = new Producto(nombre, precio, stock, foto)
        productos.push(NuevoProducto)
        // console.log(zapatilla);
        alert(`El producto que agrego es ${NuevoProducto.nombre}, hay ${NuevoProducto.stock} unidades y su precio es ${NuevoProducto.precio}`)
    }else if(pregunta == "No" || pregunta == "no"){
        alert("Muchas gracias!");
        break;
    }else{
        alert(`${pregunta} no es una respuesta válida. Por favor, responde "Si" o "No".`);
    }
}

console.table(productos)

for (const element of productos) {
    console.log(element);
}


