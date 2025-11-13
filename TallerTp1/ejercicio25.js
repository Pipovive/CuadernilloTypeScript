const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(url, {
method: 'DELETE' // Método HTTP
})
.then(response => {
if (response.ok) {
console.log('Recurso eliminado');
} else {
console.error('Error al eliminar el recurso');
}
})
.catch(error => console.error('Error:', error));