function operacion(a, b, callback) {
const resultado = a + b;

callback(resultado);
    }

    function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`);
    }

    operacion(5, 3, mostrarResultado);