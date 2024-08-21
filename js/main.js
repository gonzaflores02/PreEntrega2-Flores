

function sumaNumeros() {
    let cantidadNumeros = parseInt(prompt("¿Cuantos números deseas sumar?"));
    if(isNaN(cantidadNumeros)){
        alert("Numero Invalido")
        return;
    }
    let suma = 0
    for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt("Ingresa el numero " + i + ":"));
        if (isNaN(numero)) {
            alert("¡Error! Ingresa un número valido.");
            return;
        } else {
            suma = suma + numero
        }
    }
    alert("La suma de los" + " " + cantidadNumeros + " " + "números ingresados es:" + " " + suma + ", Gracias!");
}

alert("Calculadora de sumas, en el caso de querer restar colocar el signo \" - \" en el numero correspondiente")

sumaNumeros()