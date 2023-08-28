/* Creacion del servidor */

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express(); /* Implementación del servicio */

conectarDB();
app.use(cors()); /* llamado de funcion cors */
app.use(express.json()); /* Se habilita recepción de json en la api */
app.use('/api', require('./routes/developers'));


app.listen(4000, () => {
    console.log("El servidor esta conectado")
});
