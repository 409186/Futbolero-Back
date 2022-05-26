const router = require("express").Router()
const Jugadores = require("../models/Jugador.model")
const Equipos = require("../models/Equipos.model");
const mongoose = require("mongoose")

router.get("/jugadores", (req, res) => {
    Jugadores.find()
    .then(totalJugadores => {
        res.json({jugadores: totalJugadores})
    })
    .catch( error => console.log("Este es el error =>", error))
})

router.post("/jugadores", (req, res) => {
    Jugadores.create(req.body)
    .then(nuevoJugador => {
        const {_id} = nuevoJugador
        Equipos.findByIdAndUpdate(req.body.equipoId, {
            $push: { jugadores: _id}
        }, { new: true })
        .populate("jugadores")
        .then(jugadorActualizado => {
            console.log(jugadorActualizado)
            res.json(jugadorActualizado)
        })
    })
    .catch( error => console.log("Este es el error =>", error))
})

router.put("/editar/:id", (req, res) => {
    const { id } = req.params
    Jugadores.findByIdAndUpdate(id, req.body, { new: true })
        .then(mascotaActualizada => {
            res.json(mascotaActualizada)
        })
        .catch(error => console.log("Este es el error =>", error))
})


router.delete("/eliminar/:id", (req, res) => {
    const { id } = req.params
    Jugadores.findByIdAndRemove(id)
        .then(eliminado => {
            Equipos.findByIdAndUpdate(req.body.equipoId, { $pull: { jugadores: id } }, { new: true })
                .then(equipoActualizado => {
                    res.json(equipoActualizado)
                }).catch(error => console.log("Este es el error =>", error))
        })
        .catch(error => console.log("Este es el error =>", error))
})


module.exports = router;