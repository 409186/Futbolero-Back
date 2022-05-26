const { Schema, model } = require("mongoose");

const equipoSchema = new Schema(
    {
        nombreDelEquipo: {
            type: String,
            required: true,
            unique: true
        },
        jugadores: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Jugador'
        }],
        imagenLogo: {
            type: String,
            default: "http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
        }
    },
    {
        timestamps:true
    }
)

module.exports = model("Equipo", equipoSchema)