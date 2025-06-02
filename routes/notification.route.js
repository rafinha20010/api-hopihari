const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications.controller');
const login = require('../middleware/usuarios.middleware');


// Rota GET protegida com login.required
router.get("/goku",  notificationsController.notificationsRoute);

module.exports = router;