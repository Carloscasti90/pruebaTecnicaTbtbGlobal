/* Configuración de conexión a base de datos */

const mongoose = require('mongoose'); /* Importo dependencia de mongo */
require('dotenv').config({ path: 'config.env' }); /* Importación en archivo de config.env */


const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conexión establecida con la base de datos');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = conectarDB; /* Exporto la función para que sea visible  en otros archivos */


