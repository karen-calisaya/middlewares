const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next){
    let texto ="El usuario ingreso a la ruta: " + req.url + "\n"
    fs.appendFileSync('src/logs/userLogs.txt', texto);
    next();
}

module.exports = logMiddleware