const express = require('express');
const app = express();

const citas = require('../controllers/citasControllers');

app.get('/citas', citas.obtenerUsuarios);
app.post('/citas', citas.crearUsuario);


module.exports = app;