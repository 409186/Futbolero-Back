const router = require("express").Router();
const Equipos = require("../models/Equipos.model");
const mongoose = require("mongoose")

router.get("/equipos", (req, res) => {
    Equipos.find()
    .then(totalEquipos => {
        console.log("Todos los equipos =>", totalEquipos)
        res.json({teams:totalEquipos})
    })
    .catch( error => console.log("Este es el error =>", error))
})

router.get("/detalles/:id", (req, res) => {
    const {id} = req.params
    console.log("ID =>", id)
    Equipos.findById(id)
    .populate("jugadores")
    .then(detalles => {
        res.json(detalles)
    })
    .catch(error => console.log("Este es el error =>", error))
})

router.post("/equipos", (req, res) => {
    console.log("Body =>", req.body)
    Equipos.create(req.body)
    .then(nuevoEquipo => {
        console.log("Nuevo =>", nuevoEquipo)
        res.json(nuevoEquipo)
    })
    .catch( error => console.log("Este es el error =>", error))
})

router.put("/editar/:id", (req, res) => {
    const {id} = req.params
    Equipos.findByIdAndUpdate(id, req.body, { new: true })
    .then(detallesEquipo => {
        res.json(detallesEquipo)
    })
    .catch(error => console.log("Este es el error =>", error))
})

router.delete("/eliminar/:id", (req, res) => {
    const {id} = req.params
    Equipos.findByIdAndDelete(id)
    .then(eliminarEquipo => {
        res.json(eliminarEquipo)
    })
    .catch(error => console.log("Este es el error =>", error))
})

module.exports = router;