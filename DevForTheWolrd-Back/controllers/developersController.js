/* Gestión de peticiones api */
const Developer = require("../models/Developer");

exports.crearDeveloper = async(req, res) => {
    console.log(req.body);

    try {
        let developer;
        developer = new Developer(req.body); /* componente que envía la data */
        await developer.save();
        res.send(developer); /*respuesta de del muevo documento creado */

    } catch (error) {
        console.log(error);
        res.status(500).send('Se presento un error');
    }


};

exports.obtenerDevelopers = async(req, res) => {
    try {
        const developer = await Developer.find();
        res.json(developer);

    } catch (error){ 
    res.status(500).send('Se presento un error')
    }
};

exports.eliminarDeveloper = async(req, res) => {
    try{
        let developer = await Developer.findById(req.params.id)

        if(!developer) return res.status(404).json({ msg: ' El contacto ingresado no existe' })
        await Developer.findByIdAndRemove({_id: req.params.id})
        res.json({ msg: 'El contacto quedo eliminado'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Se presento un error');
    }
}

exports.obtenerDeveloper = async(req, res) => {
    try {
        let developer = await Developer.findById(req.params.id)

        if(!developer) return res.status(404).json({ msg: 'El contacto ingresado no existe'})

        res.json(developer)

    } catch (error) {
        console.log(error);
        res.status(500).send('Se presento un error')
    }
}

exports.actualizarDeveloper = async(req, res ) => {
    try {
        const { nombre,primer_apellido,segundo_apellido,identificacion,edad,telefono,tipo_de_desarrollador,correo,ciudad,foto_de_perfil} = req.body
        let developer = await Developer.findById(req.params.id)

        if(!developer) return res.status(404).json({ msg: 'El contacto ingresado no existe'})

        developer.nombre = nombre,
        developer.primer_apellido = primer_apellido,
        developer.segundo_apellido = segundo_apellido,
        developer.identificacion = identificacion,
        developer.edad = edad,
        developer.telefono = telefono,
        developer.tipo_de_desarrollador = tipo_de_desarrollador,
        developer.correo = correo,
        developer.ciudad = ciudad,
        developer.foto_de_perfil = foto_de_perfil

        developer = await Developer.findByAndUpdate({_id: req.params.id }, developer, { new: true})
        res.json(developer)

    }   catch (error) {
        console.log(error);
            res.status(500).send('Se presento un error')
        }
    }
