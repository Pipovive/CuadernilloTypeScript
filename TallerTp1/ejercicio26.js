const promesaSimple = new Promise((resolve, reject) => {
const exito = true;
if (exito) {
resolve("¡Promesa cumplida!");
} else {
reject("Promesa rechazada.");
}
});
promesaSimple
.then(mensaje => console.log(mensaje))
.catch(error => console.error(error));