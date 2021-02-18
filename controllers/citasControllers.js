const express = require('express');
const { response, request } = require('express')

const db = require('../config/conexion');


const obtenerUsuarios = (req = request, res = response) => {

    let consulta = 'call obtenerusuarios';
    db.query(consulta, (error, results) => {

        return res.json({
            ok: true,
            msg: results
        });
    });
}


const crearUsuario = (req = request, res = response) => {

    let data = req.body;

    if (data.correo == '' || data.correo == undefined) {
        return res.json({
            ok: false,
            msg: 'porfavor ingrese el correo'
        });
    }

    if (data.password == '' || data.password == undefined) {
        return res.json({
            ok: false,
            msg: 'ingrese el password'
        })
    }

    db.query('call crearusuarios(?,?)', [data.correo, data.password], (error, result) => {
        return res.json({
            ok: true,
            msg: result
        });
    });

}

module.exports = {
    obtenerUsuarios,
    crearUsuario

}