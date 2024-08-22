function Producto(nombre, precio, stock, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
}

function validacionNumero(aValidar) {
    aValidar = parseFloat(aValidar);
    
    while (isNaN(aValidar)) {
        aValidar = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    return aValidar;
}

let productos = [];

while (true) {
    let pregunta = prompt("Quieres agregar un producto para la venta? Si o No")
    if (pregunta == "Si" || pregunta == "si" || pregunta == "") {
        alert("Bien, vamos a agregar los productos");
        let nombre = prompt("Ingresa el nombre del producto");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        precio = validacionNumero(precio);
        let stock = parseFloat(prompt("Ingresa que cantidad del producto hay disponible"));
        stock = validacionNumero(stock)
        let foto = prompt("Ingresa el nombre de la imagen del producto");

        const NuevoProducto = new Producto(nombre, precio, stock, foto)
        productos.push(NuevoProducto)
        alert(`El producto que agrego es ${NuevoProducto.nombre}, hay ${NuevoProducto.stock} unidades y su precio es ${NuevoProducto.precio} $ARS`)
    } else if (pregunta == "No" || pregunta == "no" || pregunta == null) {
        break;
    } else {
        alert(`${pregunta} no es una respuesta válida. Por favor, responde "Si" o "No".`);
    }
}

let seguir = true
function buscar() {
    let buscarusuario = prompt("Introduce el nombre del producto. Si quiere dejar de buscar presione CANCELAR.")
    if (buscarusuario == null) {
        seguir = false
    } else {
        const busquedaPorNombre = productos.filter(el => el.nombre.includes(buscarusuario))
        console.log(busquedaPorNombre);

        if (busquedaPorNombre.length <= 0) {
            alert("no coincide")
        } else {
            busquedaPorNombre.forEach(el => {
                alert(`Producto: ${el.nombre} \n Precio: ${el.precio} \nStock: ${el.stock}`)
            })
        }
    }
}

if (productos.length <= 0) {
    alert("No has agregado ningun producto a tu catalogo")
} else {
    let preguntaBuscar = alert("Los productos han sido correctamente agregados al catalogo. Busque sus productos")
    while (seguir) {
        buscar()
    }
}


alert("Hasta aca el script. \nSaludos")
