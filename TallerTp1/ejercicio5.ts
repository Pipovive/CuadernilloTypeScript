export function contadorVocal (cadena: string) : number {
    let contador : number = 0
    const vocales = "AEIOUaeiou"

    for (let i = 0; i < cadena.length; i++  ) {
        if (vocales.includes(cadena[i])) {
            contador++
        }
    }
    
    return contador;
}

console.log(contadorVocal("Hola mundo"))