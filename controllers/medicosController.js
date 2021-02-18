const { request, response } = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/conexion');

const crearmedicos = (req = request, res = response) => {
    let data = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    // if (
    //     data.nombre == '' ||
    //     data.edad == '' ||
    //     data.nombre == undefined || data.edad == undefined) {
    //     return res.json({
    //         ok: false,
    //         msg: 'ingrese todos los datos'
    //     })
    // }

    db.query('call obtenermedico(?,?)', [data.nombre, data.edad], (error, result) => {
        return res.json({
            ok: true,
            result
        })
    });

}



module.exports = {
    crearmedicos
}