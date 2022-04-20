let userAdmin = ["Ada", "Greta", "Vim", "Tim"];

const adminMiddleware = (req, res, next) =>{
    if(userAdmin.includes(req.query.user)){
        next();

    }else {
        res.send("No tienes privilegios de entrar aca")
    }
}

module.exports = adminMiddleware;