const mysql = require("../mysql");

exports.verificarBrinquedo = async (req, res, next) => {
    try {
          const resultado = await mysql.execute(`
            SELECT * FROM atracoes WHERE id = ?
            `, [req.params.idRide]);

            if (resultado.lenght == 0) {
                return res.status(404).send({"Mensagem": "Brinquedo não encontrado"})            
            }
            next();
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.entrarfila = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(`
            INSERT INTO hopi_hari_db.user_has_atracoes (id_users, id_atracoes) VALUES(?, ?)
            `, [res.locals.idUsuario, Number(req.params.idRide)]);
            return res.status(201).send({"Mensagens": resultados})
    } catch (error) {
        return res.status(500).send(error)
    }
}