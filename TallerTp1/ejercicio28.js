const promesaA = Promise.resolve("Promesa A cumplida");
const promesaB = Promise.resolve("Promesa B cumplida");
const promesaC = Promise.resolve("Promesa C cumplida");

Promise.all([promesaA, promesaB, promesaC])
    .then(resultados => console.log(resultados))
    .catch(error => console.error(error));