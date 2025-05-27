const mysql = require('../mysql');


exports.cadastroBrinquedo = async (req, res) => {
    try {
      console.log('Dados recebidos:', req.body);
      const resultados = await mysql.execute('INSERT INTO rides (name, waiting_time, status, id_areas) VALUES (?, ?, ?, ?)', 
        [   req.body.name, 
          req.body.waiting_time, 
          req.body.status, 
          req.body.id_areas  ]);

      console.log('Resultados da query:', resultados);
      return res.status(201).send({
        mensagem: "Brinquedo cadastrado com sucesso",
        resultados: resultados
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  };

  exports.getBrinquedosByArea = async (req, res) => {

try{

resultados = await mysql.execute(`SELECT * FROM rides WHERE id_areas = (
                            SELECT id FROM rides WHERE id_areas = ?
  )`
  , [req.params.areaName]);

if (resultados.length == 0) {
    return res.status(404).send({ mensagem: "Nenhum brinquedo encontrado para esta área" });
  }

return res.status(200).send({
    "mensagem": "Brinquedos encontrados",
    "resultados": resultados
  });


} catch (error)   {

return res.status(500).send({ "erro": "Erro ao buscar brinquedos" });

}
}