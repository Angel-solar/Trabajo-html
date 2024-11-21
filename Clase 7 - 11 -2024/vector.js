let cantidad = 0, suma = 0, promedio = 0;
let vectornumeros=[];
cantidad = parseInt(prompt("Introduce la cantidad de materias"));
for(i = 0; i < cantidad; i++)
{
    vectornumeros[i]=parseFloat(prompt(1 + i + ". Introduce la calificación de la materia:"));
    suma = suma + vectornumeros[i];
}
promedio = vectornumeros[i] / cantidad; 
promedio = suma / cantidad;
document.write("El promedio ", promedio, "<br>");