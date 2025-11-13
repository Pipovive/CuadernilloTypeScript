const promesa1 = new Promise((resolve) => {
setTimeout(() => resolve("Promesa 1 cumplida"), 1000);
});
const promesa2 = new Promise((resolve) => {
setTimeout(() => resolve("Promesa 2 cumplida"), 2000);
});
promesa1
.then(mensaje => {
console.log(mensaje);
return promesa2;
})
.then(mensaje => console.log(mensaje))
.catch(error => console.error(error));