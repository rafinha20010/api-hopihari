const express = require('express');
const router = express.Router();
const login = require('../middleware/usuarios.middleware');
const brinquedosController = require("../controllers/brinquedos.controller");

router.post("/",
    login.required,
    login.userRequired,
    brinquedosController.cadastroBrinquedo
    
);

router.get("/area/:areaName", login.required,
    brinquedosController.getBrinquedosByArea
);

module.exports = router; 