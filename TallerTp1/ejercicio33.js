function primero(callback) {
setTimeout(() => {
console.log("Primero");
callback();
}, 1000);
}
    function segundo(callback) {
    setTimeout(() => {
    console.log("Segundo");
    callback();
    }, 1000);
}
    function tercero() {
    console.log("Tercero");
}
primero(() => {
    segundo(tercero);
});