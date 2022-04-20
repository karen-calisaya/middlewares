const fs = require('fs');

function logMiddleware(req, res, next){
    let texto ="El usuario ingreso a la ruta: " + req.url + "\n"  /* le concatenamos la ruta- con req.url */
    fs.appendFileSync('src/logs/userLogs.txt', texto);
    next(); /* para pasar al controlador y ejecutar el metodo que corresponda */
}
/* appendFileSync, con esto agrega un regustro mas a ese archivo, no sobreescribe, mas bien lo agrega.
Recibe dos parámetros: en donde deseo escribir, y otro que es lo que queremos escribir en el archivo.
writeFileSync me sobreescribe todo el texto, borra lo anterior y guarda lo actual */

module.exports = logMiddleware

/* como es un middleware a nivel gloal hay que requerirlo en el app.js */