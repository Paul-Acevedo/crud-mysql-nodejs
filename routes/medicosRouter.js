const express = require('express');
const app = express();
const medico = require('../controllers/medicosController');
const { body, validationResult } = require('express-validator');

app.post('/medicos',
    body('nombre').isEmail(),
    medico.crearmedicos);

module.exports = app;