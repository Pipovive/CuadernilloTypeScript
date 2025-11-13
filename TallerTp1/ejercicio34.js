function dividir(a, b, callback) {
    if (b === 0) {
    callback(new Error("No se puede dividir por cero"), null);
    } else {
    callback(null, a / b);
    }
}

dividir(10, 2, (error, resultado) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`El resultado es: ${resultado}`);
    }
});