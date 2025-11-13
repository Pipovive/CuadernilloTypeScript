const empleados = [
    { nombre: "Ana", edad: 28, departamento: "Ventas" },
    { nombre: "Luis", edad: 35, departamento: "Marketing" },
    { nombre: "Carlos", edad: 32, departamento: "Ventas" },
    { nombre: "Marta", edad: 25, departamento: "Desarrollo" }
];

const departamento_ventas = empleados.filter(empleados => empleados.departamento === "Ventas" )

console.log(departamento_ventas)