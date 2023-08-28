/* rutas */

const express = require('express'); /* Importación de el servicio de express */
const router = express.Router(); /* Controlador de rutas */
const developersController = require('../controllers/developersController') /* Importación del controlador */



router.post('/listar-developers', developersController.crearDeveloper);
router.get('/listar-developers', developersController.obtenerDevelopers);
router.delete('/listar-developers/:id', developersController.eliminarDeveloper); 





module.exports = router; /* Exportación del modulo de rutas */


