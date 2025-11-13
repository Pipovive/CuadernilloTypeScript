const productos = [
  { nombre: "Laptop", categoria: "Electrónica" },
  { nombre: "Camiseta", categoria: "Ropa" },
  { nombre: "Teléfono", categoria: "Electrónica" },
  { nombre: "Pantalones", categoria: "Ropa" }
];

const agruparCategorias = productos.reduce((grupo,producto) => {
    const {categoria} = producto
    grupo[categoria] = grupo[categoria] || []
    grupo[categoria].push(producto)
    return grupo
}, {});

console.log(agruparCategorias)