const { Schema, model } = require("mongoose");

const equipoSchema = new Schema(
    {
        nombreDelEquipo: {
            type: String,
            required: true,
            unique: true
        },
        jugadores: [{ type: Schema.Types.ObjectId, ref: 'Jugador' }],
        imagenLogo: {
            type: String,
            required: true
        }
    },
    {
        timestamps:true
    }
)

module.exports = model("Equipo", equipoSchema)