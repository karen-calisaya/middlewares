let userAdmin = ["Ada", "Greta", "Vim", "Tim"];

const adminMiddleware = (req, res, next) =>{
    if(userAdmin.includes(req.query.user)){ /* si userAdmin (ARRAY) incluye el nombre que esta llegando por req.query.user que siga pasando */
        next();

    }else {
        res.send("No tienes privilegios de entrar aca") /* si no no tiene permitido entrar aca */
    }
}

module.exports = adminMiddleware;

/* este middleware debe gestionar si el nombre de usuario es el correcto
para dejarte pasar.  */