const mongoose = require("mongoose");

const ProyectoSchema = ({
  nombre: {
    type: String,
    trim: true,
    required: true
  },
  creador: {
    // Como un join en sql
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  },
  creado: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Proyecto", ProyectoSchema);