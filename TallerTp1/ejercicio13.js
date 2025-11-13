const texto = '{"nombre":"carlos","correo":"carlos@gmail.com","numero":"1234"}';
const objeto = JSON.parse(texto);

console.log(objeto.nombre);
console.log(objeto.correo);
console.log(objeto.numero);
