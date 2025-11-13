const jsonString = '[{"nombre":"Pedro","edad":35},{"nombre":"Lucía","edad":29},{"nombre":"Miguel","edad":40}]';

const objeto = JSON.parse(jsonString)

objeto.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});