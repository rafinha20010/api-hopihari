const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware")
const filaController = require("../controllers/filas.controller")

router.post("/ i/d/Ride", 
    login.required,
    filaController.verificarBrinquedo,
    filaController.entrarfila
);

module.exports = router;
