const router = require("express").Router();
const Equipos = require("../models/Equipos.model");

router.get("/", (req, res) => {
    Equipos.find()
    .then(totalEquipos => {
        const normalizedTeams = []
    let matchTeams = []
        for (let index = 0; index < totalEquipos.length; index++) {
            matchTeams.push(totalEquipos[index])
            if (index % 2 !== 0) {
                console.log(index)
                normalizedTeams.push(matchTeams)
              matchTeams = []
            }
        }
        res.json({matches:normalizedTeams})
    })
    .catch( error => console.log("Este es el error =>", error))
})



module.exports = router