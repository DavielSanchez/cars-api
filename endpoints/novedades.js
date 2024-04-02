const express = require('express')
const novedadesSchema = require('./models/novedades')
    // const app = express();
const router = express.Router();


////////////////////////GET////////////////////////
///Obtener todos los carros nuevos de la base de datos///
router.get('/novedades', (req, res) => {
    novedadesSchema
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


///////////////////Post////////////////////
///Guardar un carro en la base de Datos///
router.post('/novedades', (req, res) => {
    // res.send('Agregando un carro ...')
    const car = novedadesSchema(req.body)
    car
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


router.put('/novedades/:id', (req, res) => {
    const id = req.params.id
    const {
        carBrand,
        carModel,
        carYear,
        carPrice,
        Engine,
        exteriorColor,
        interiorColor,
        Fuel,
        Transmission,
        Traction,
        Type,
        Usage,
        Doors,
        Passengers
    } = novedadesSchema(req.body)
    novedadesSchema
        .updateOne({ _id: id }, {
            $set: {
                carBrand,
                carModel,
                carYear,
                carPrice,
                Engine,
                exteriorColor,
                interiorColor,
                Fuel,
                Transmission,
                Traction,
                Type,
                Usage,
                Doors,
                Passengers
            }
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///////////////////Delete////////////////////
///Borrando un carro en la base de Datos///
router.delete(('novedades/:id', (req, res) => {
    const id = req.params.id
    novedadesSchema
        .deleteOne({
            _id: id
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
}))

module.exports = router;