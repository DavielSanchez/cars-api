const express = require('express')
const carSchema = require('./models/cars')
const app = express();
const router = express.Router();
const { swaggerDocs } = require("../Swagger")



////////////////////////GET////////////////////////
///Obtener todos los carros de la base de datos///
/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *       - Empty
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/cars', (req, res) => {
    carSchema
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener el carro de la base de datos por su id///
router.get('/cars/car/:id', (req, res) => {
    const id = req.params.id
    carSchema
        .findById(id)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


///Obtener los carros de la base de datos por marcas///
router.get('/cars/brand/:carBrand', (req, res) => {
    carSchema
        .find({
            "carBrand": `${req.params.carBrand}`
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener los carros de la base de datos por modelo///
router.get('/cars/model/:carModel', (req, res) => {
    carSchema
        .find({
            "carModel": `${req.params.carModel}`
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener los carros de la base de datos por año///
router.get('/cars/year/:carYear', (req, res) => {
    carSchema
        .find({
            "carYear": `${req.params.carYear}`
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener los carros de la base de datos por precio///
router.get('/cars/price/:carPrice', (req, res) => {
    carSchema
        .find({
            "carPrice": `${req.params.carPrice}`
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener los carros de la base de datos por combustible///
router.get('/cars/fuel/:fuel', (req, res) => {
    carSchema
        .find({
            "fuel": `${req.params.fuel}`
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///Obtener los carros de la base de datos por tipo///
router.get('/cars/type/:type', (req, res) => {
    carSchema
        .find({
            "Type": [`${req.params.type}`]
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


///////////////////Post////////////////////
///Guardar un carro en la base de Datos///
router.post('/car', (req, res) => {
    // res.send('Agregando un carro ...')
    const car = carSchema(req.body)
    car
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


///////////////////PUT////////////////////
///Guardar un carro en la base de Datos///
router.put('/car/:id', (req, res) => {
    // res.send('Agregando un carro ...')
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
    } = carSchema(req.body)
    carSchema
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


///////////////////DELETE////////////////////
///Borrando un carro en la base de Datos///
router.delete('/car/:id', (req, res) => {
    // res.send('Agregando un carro ...')
    const id = req.params.id
    carSchema
        .deleteOne({ _id: id })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = router;