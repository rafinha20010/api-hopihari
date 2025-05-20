const mysql = require('../mysql');


exports.brinquedosRoute = async (req, res) => {

    try {
        const resultados = await mysql.execute('INSERT INTO atracoes (nome, tempo_espera, status, area) VALUES (?, ?, ?, ?)', [
            req.body.name,
            req.body.tempo_espera,
            req.body.status,
            req.body.area
        ])
    } catch (error){
        return res.status(500).json({erro: "Erro interno do servidor"})
    }
}