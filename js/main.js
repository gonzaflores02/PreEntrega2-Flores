function Producto(nombre, precio, stock, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("foto").value = "";
}

function mostrarAlerta() {
    const alerta = document.getElementById("alertContainer");
    alerta.innerHTML = `<p class="alert alert-danger">Complete los campos correctamente</p>`;
}

// Cargar productos del localStorage o del archivo JSON
function cargarProductos() {
    let productosLS = localStorage.getItem("productos");

    if (productosLS) {
        try {
            let productos = JSON.parse(productosLS);
            if (Array.isArray(productos)) {
                return Promise.resolve(productos);
            } else {
                localStorage.removeItem("productos");
                return fetch('./data/productos.json')
                    .then((response) => response.json())
                    .then((productos) => {
                        localStorage.setItem("productos", JSON.stringify(productos)); 
                        return productos;
                    });
            }
        } catch (e) {
            console.error("Error al parsear productos desde localStorage:", e);
            localStorage.removeItem("productos");
            return fetch('./data/productos.json')
                .then((response) => response.json())
                .then((productos) => {
                    localStorage.setItem("productos", JSON.stringify(productos)); 
                    return productos;
                });
        }
    } else {
        return fetch('./data/productos.json')
            .then((response) => response.json())
            .then((productos) => {
                localStorage.setItem("productos", JSON.stringify(productos)); 
                return productos;
            });
    }
}

// Mostrar productos en el DOM
function mostrarProducto() {
    const listado = document.getElementById("listadoProductos");

    cargarProductos().then((productos) => {
        listado.innerHTML = "";

        if (productos.length === 0) {
            listado.innerHTML = "<p>No has agregado ningún producto a tu catálogo.</p>";
        } else {
            productos.forEach(el => {
                listado.innerHTML += `
                    <div class="producto">
                        <img src="${el.foto}" alt="Imagen de ${el.nombre}" class="producto-img">
                        <h3>${el.nombre}</h3>
                        <p>Precio: ${el.precio} $ARS</p>
                        <p>Stock: ${el.stock} unidades</p>
                    </div>
                `;
            });
        }
    });
}

// Crear un nuevo producto y agregarlo a localStorage
function CrearProducto() {
    cargarProductos().then((productos) => {
        let nombre = document.getElementById("nombre").value;
        let precio = parseFloat(document.getElementById("precio").value);
        let stock = parseFloat(document.getElementById("stock").value);
        let foto = document.getElementById("foto").value;

        if (nombre === "" || isNaN(precio) || isNaN(stock) || foto === "") {
            mostrarAlerta();
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });

        swalWithBootstrapButtons.fire({
            title: "¿Estas seguro que quieres añadir este producto?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, añadir!",
            cancelButtonText: "No!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const NuevoProducto = new Producto(nombre, precio, stock, foto);
                productos.unshift(NuevoProducto);

                // Guardar los productos actualizados en localStorage
                localStorage.setItem("productos", JSON.stringify(productos));

                limpiarFormulario();
                mostrarProducto();

                swalWithBootstrapButtons.fire({
                    title: "Añadido!",
                    text: "El producto ha sido agregado correctamente",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "El producto no ha sido añadido",
                    icon: "error"
                });
            }
        });
    });
}

// Inicialización para cargar productos al inicio
document.addEventListener("DOMContentLoaded", mostrarProducto);
