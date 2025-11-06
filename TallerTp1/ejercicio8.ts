export function palindromo (cadena : string): boolean  {
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const cadenaReversa = cadenaLimpia.split('').reverse().join('');

    return cadenaLimpia === cadenaReversa
} 

console.log(palindromo("A man, a plan, a canal, Panama"))