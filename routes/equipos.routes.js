const router = require("express").Router();
const Equipos = require("../models/Equipos.model");
const mongoose = require("mongoose")

router.get("/equipos", (req, res) => {
    Equipos.find()
    .then(totalEquipos => {
        console.log("Todos los equipos =>", totalEquipos)
        res.json(totalEquipos)
    })
    .catch( error => console.log("Este es el error =>", error))
})

router.get("/partidos", (req, res) => {
    Equipos.find()
    .then(totalPartidos => {
        res.json(totalPartidos)
    })
    .catch(error => console.log("Este es el error =>", error))
})

router.post("/equipos", (req, res) => {
    console.log("Body =>", req.body)
    Equipos.create(req.body)
    .then(nuevoEquipo => {
        console.log("Nuevo =>", nuevoEquipo)
        res.status(201).json(nuevoEquipo)
    })
    .catch( error => console.log("Este es el error =>", error))
})

/* router.get("/equipos/:id", (req, res) => {
    const {id} = req.params
    console.log("ID =>", id)
}) */


module.exports = router;