"use strict";
exports.__esModule = true;
function generadorDeId(arregloDeId) {
<<<<<<< HEAD
    var id = Math.floor(Math.random() * (1 + 1000) - 1);
    for (var i = 0; i < arregloDeId.length; i++) {
        if (arregloDeId[i] === id) {
            id = Math.floor(Math.random() * (1 + 1000) - 1);
=======
    var id = Math.floor(Math.random() * (1000 - 1) + 1);
    for (var i = 0; i < arregloDeId.length; i++) {
        if (arregloDeId[i] === id) {
            id = Math.floor(Math.random() * (1000 - 1) + 1);
>>>>>>> hernan
            i = 0;
        }
    }
    arregloDeId.push(id);
    return id;
}
exports["default"] = generadorDeId;
