const {Schema, model} = require("mongoose")

const jugadoresSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        posicion: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Jugador = model("Jugador", jugadoresSchema)

module.export = Jugador