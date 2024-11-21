let cantidad, mayor = 0, menor = 0;
let vectornumeros=[];
for(let i = 0; i < 10; i++)
    {
        vectornumeros[i] = parseFloat(prompt("Introduce el numero:"));
    }
mayor = vectornumeros[0];
menor = vectornumeros[0];
for(let i = 1; i <= 10; i++)
{
    if(vectornumeros[i]<menor)
    {
        menor = vectornumeros[i];
    }
    if(vectornumeros[i]>mayor)
    {
        mayor = vectornumeros[i];
    }
}
document.write("El menor es: ", menor, "<br>")
document.write("El mayor es: ", mayor, "<br>")