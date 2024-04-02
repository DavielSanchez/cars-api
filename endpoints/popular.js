const express = require('express')
const popularSchema = require('./models/popular')
const app = express();
const router = express.Router();


////////////////////////GET////////////////////////
///Obtener todos los carros populares de la base de datos///
router.get('/popular', (req, res) => {
    popularSchema
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})


///Obtener los carros populares de la base de datos por marcas///
router.get('/popular/brand/:carBrand', (req, res) => {
    popularSchema
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

///Obtener los carros populares de la base de datos por modelo///
router.get('/popular/model/:carModel', (req, res) => {
    popularSchema
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

///Obtener los carros populares de la base de datos por año///
router.get('/popular/year/:carYear', (req, res) => {
    popularSchema
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

///Obtener los carros populares de la base de datos por precio///
router.get('/popular/price/:carPrice', (req, res) => {
    popularSchema
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

///Obtener los carros populares de la base de datos por combustible///
router.get('/popular/fuel/:fuel', (req, res) => {
    popularSchema
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

///Obtener los carros populares de la base de datos por tipo///
router.get('/popular/type/:type', (req, res) => {
    popularSchema
        .find({
            "Type": `${req.params.type}`
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
router.post('/popular', (req, res) => {
    // res.send('Agregando un carro ...')
    const car = popularSchema(req.body)
    car
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

///////////////////Post////////////////////
///Guardar un carro en la base de Datos///
router.delete('/popular/:id', (req, res) => {
    // res.send('Agregando un carro ...')
    const id = req.params.id
    popularSchema.deleteOne({ _id: id })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = router;