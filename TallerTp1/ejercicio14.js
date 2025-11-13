const jsonString = '{"nombre":"carlos","correo":"carlos@gmail.com","numero":"1234"}';

const objeto = JSON.parse(jsonString)

objeto.numero = "3124"

const nuevoJsonStringify = JSON.stringify(objeto)

console.log(nuevoJsonStringify)