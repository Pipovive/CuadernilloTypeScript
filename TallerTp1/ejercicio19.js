const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" }
];
const pedidos = [
    { idUsuario: 1, producto: "Laptop" },
    { idUsuario: 2, producto: "Teléfono" },
    { idUsuario: 1, producto: "Camiseta" }
];

const pedido_Usuario = usuarios.map(usuario => ({
    ...usuario,
    usuario_pedido: pedidos.filter(pedido => pedido.idUsuario === usuario.id)

}))

console.log(pedido_Usuario)