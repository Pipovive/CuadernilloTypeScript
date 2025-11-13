const sumar = (a, b) => new Promise((resolve) => resolve(a + b));
const multiplicar = (a, b) => new Promise((resolve) => resolve(a * b));

sumar(2, 3)
    .then(resultado => {
        console.log(`Suma: ${resultado}`);
    return multiplicar(resultado, 2);
    })
    .then(resultado => console.log(`Multiplicación: ${resultado}`))
    .catch(error => console.error(error));