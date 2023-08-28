const mongoose = require('mongoose'); /* Llamado de librería de mongoose */

const DeveloperSchema = mongoose.Schema({

    nombre: {
        type : String,
        required : true
    },

    primer_apellido: {
        type : String,
        required : true
    },

    segundo_apellido: {
        type : String,
        required :true
    },

    identificacion: {
        type : Number,
        required : true
    },

    edad: {
        type : Number,
        required : true
    },

    telefono: {
        type : Number,
        required : true
    },

    tipo_de_desarrollador: {
        type : String,
        required : true
    },

    correo: {
        type : String,
        required : true,
    },

    ciudad: {
        type : String,
        required : true
    },

    foto_de_perfil: {
        type : String,
        required : true
    },

    fec_cre: {
        type : Date,
        default : Date.now()
    }

});


module.exports = mongoose.model('Developer', DeveloperSchema); /* Exportación del modelo */