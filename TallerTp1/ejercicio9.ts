export function segundoMayor (array: number[]) : number {
    let max = -Infinity
    let segundo = -Infinity
    
    for (let numero of array) {
        if (numero > max) {
            segundo = max 
            max = numero
        } else if(numero > segundo && numero < max ) {
            segundo = numero
        } 
    }

    return segundo 

}

console.log(segundoMayor([-9,-24,-44444,-20]))