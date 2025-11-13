const promesaX = new Promise((resolve) => setTimeout(() => resolve("Promesa X cumplida"), 1000));
const promesaY = new Promise((resolve) => setTimeout(() => resolve("Promesa Y cumplida"), 2000));

Promise.race([promesaX, promesaY])
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
    