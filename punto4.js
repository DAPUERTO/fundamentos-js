// Solicitar cantidad en pesos colombianos
let pesos = parseFloat(prompt("Ingrese el valor en pesos colombianos:"));


let tasa = 4000;

// Convertir a dólares
let dolares = pesos / tasa;


alert("El valor en dólares es: $" + dolares.toFixed(2));
console.log("El valor en dólares es: $" + dolares.toFixed(2));
