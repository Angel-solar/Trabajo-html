let cantidad, suma = 0, promedio;
let vectornumeros = [];

while (vectornumeros.length < 10) {
    cantidad = parseFloat(prompt("Introduce un número entre 1 y 15:"));

    if (cantidad < 1 || cantidad > 15) {
        alert("El número no está en el rango. Pon otro");
    } else if (vectornumeros.includes(cantidad)) {
        alert("El número ya existe en el vector. Pon otro");
    } else {
        vectornumeros.push(cantidad);
    }
}
document.write("Los números son: " + vectornumeros.join(", ") + "<br>");
