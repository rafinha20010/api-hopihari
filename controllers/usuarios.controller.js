const mysql = require("../mysql")

exports.atualizarUsuario = async (req, res) => {
        try {
            const idUsuario = Number(req, params);

            const resultado = await mysql.execute(
                `update users
                    set name = "?",
                        email 	 = "?",
                        password = "?"
                    where id = ?;`
                    [
                        req.body.name,
                        req.body.email,
                        req.body.password,
                        idUsuario
                    ]
            );
        } catch (error) {

    }
}