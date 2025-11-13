function procesarArray(array, callback) {
    const resultado = array.map(callback);
    console.log(resultado);
}

function duplicar(numero) {
    return numero * 2;
}
procesarArray([1, 2, 3, 4], duplicar);