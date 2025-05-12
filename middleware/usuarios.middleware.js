const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => {
    try{
        res.locals.idUsuario = 0;

        const token = req.headers.authorization.split(" "[1]);
        const decode = jwt.decode(token, "senhadojwt");

        if (decode.id) {
            res.locais.idUsuario = decode.id;
            next();
        } else {
            return res.status(401).send({"Mensagem": "Usuario não autenticado"})
        }
    } catch (error) {
        return res.status(500).send({"erro": error.message});
    }
}