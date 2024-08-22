// while(true){
//     let pregunta = prompt("Quieres agregar un producto para la venta?, Si o No")
//     if (pregunta == "Si" || pregunta == "si"){
//         alert("Bien, vamos a agregar los productos");
//         let nombre = prompt("Ingresa el nombre del producto");
//         let precio = prompt("Ingresa el precio del producto");
//         let foto = prompt("Ingresa el nombre de la imagen del producto");
//         function Producto(nombre, precio, foto){
//             this.nombre = nombre;
//             this.precio = precio;
//             this.foto =foto;
//         }

//         const zapatilla = new Producto(nombre, precio, foto)

//         // console.log(zapatilla);
//         alert(`El producto que cargo es ${zapatilla.nombre} y su precio es ${zapatilla.precio}`)
//         break;
//     }else if(pregunta == "No" || pregunta == "no"){
//         alert("Muchas gracias!");
//         break;
//     }else{
//         alert(`${pregunta} no es una respuesta válida. Por favor, responde "Si" o "No".`);
//     }
// }




// let numeroProductosAgregar = prompt("Cuantos productos vas a agregar?")
// if (numeroProductosAgregar <= 0 || isNaN(numeroProductosAgregar)) {
//     alert("Respuesta no valida, por favor ingrese cantidad de productos a agregar")
// } else {
//     alert("Bien, vamos a agregar los productos");
//     for (let i = 0; i = numeroProductosAgregar; i++) {
//         let nombre = prompt("Ingresa el nombre del producto");
//         let precio = prompt("Ingresa el precio del producto");
//         let foto = prompt("Ingresa el nombre de la imagen del producto");
//         function Producto(nombre, precio, foto) {
//             this.nombre = nombre;
//             this.precio = precio;
//             this.foto = foto;
//         }

//         const producto = new Producto(nombre, precio, foto)

//         // console.log(zapatilla);
//         alert(`El producto que cargo es ${zapatilla.nombre} y su precio es ${zapatilla.precio}`)
//         break;

//     }
// }


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    };
}

// Variable global para almacenar las personas
let personas = [];
let seguir = true;

// Bucle para crear personas
while (seguir) {
    let nombre = prompt("Ingresa el nombre:");
    let edad = prompt("Ingresa la edad:");

    // Verifica si el usuario presiona Cancelar
    if (nombre === null || edad === null) {
        seguir = false;
        break;
    }

    // Crea una nueva persona y la agrega al array
    let nuevaPersona = new Persona(nombre, edad);
    personas.push(nuevaPersona);

    // Pregunta al usuario si quiere crear otra persona
    seguir = confirm("¿Quieres crear otra persona?");
}

// Mostrar todas las personas creadas
for (let persona of personas) {
    persona.saludar();
}
