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

module.exports = model("Jugador", jugadoresSchema)