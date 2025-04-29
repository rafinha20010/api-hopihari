const express = require("express");
const router = express.Router();

router.post('/login', ()=>{console.log('rota de login')});
router.put('/', ()=>{console.log('rota de cadastrar')});
router.get('/', ()=>{console.log('rota de atualizar')});

module.exports = router;
