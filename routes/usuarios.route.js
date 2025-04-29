const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller")

router.post('/login', ()=>{console.log('rota de login')});
router.put('/:id', usuariosController.atualizarUsuario);
router.post('/', ()=>{console.log('rota de atualizar')});

module.exports = router;
