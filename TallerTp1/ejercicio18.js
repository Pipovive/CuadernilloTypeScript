const estudiantes = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "María", calificacion: 92 },
    { nombre: "Pedro", calificacion: 78 }
];

const agrupar_estado_estudiante = estudiantes.map( estudiante => ({
    ...estudiante,
    estado: estudiante.calificacion >= 80 ? "Aprobado" : "No aprobado"
}));

console.log(agrupar_estado_estudiante)