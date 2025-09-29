// Solicitar tres calificaciones al usuario
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Calcular el promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Mostrar el resultado
alert("El promedio de las tres notas es: " + promedio.toFixed(2));
console.log("El promedio de las tres notas es: " + promedio.toFixed(2));
