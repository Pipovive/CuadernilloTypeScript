export function contadorFrecuencia (cadena: string): Record<string, number> {
    const frecuencia : Record<string, number> = {};
    let texto = cadena.toLowerCase(); 

    for(let char of texto) {
        frecuencia[char] = (frecuencia[char] || 0) + 1
    } 

    return frecuencia
}

console.log(contadorFrecuencia("Contador"))