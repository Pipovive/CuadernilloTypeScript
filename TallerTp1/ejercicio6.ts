import { numeroAlto } from './ejercicio4';
// const saludar = (nombre : string) : string => {
//     return "Nombre " + nombre
// }

// const cuadrado = (num : number) => Math.pow(num, 2)

// console.log(cuadrado(2))

// const hola = (): string => "Hola, mundo"

// const sumar = (a : number, b : number) : number => a + b

// console.log(sumar(1,2))

// const esPar = (num : number): boolean => {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
    
// }

// console.log(esPar(1))

const numeros = [1,2,3,4,5,6]

const mapeo = numeros.map(n => n * 2)
const pares = numeros.filter(n => n % 2 === 0 )
const sumar = numeros.reduce((acc, n) => acc + n, 0)

console.log(mapeo)
console.log(pares)
console.log(sumar)