const libros = [
    { titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "Don Juan Tenorio", autor: "José Zorrilla", año: 1844 }
];

const libros_ordenados = libros.sort((a,b) => a.año - b.año)

console.log(libros_ordenados)