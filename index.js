const express = require('express')
const { default: mongoose, connect } = require('mongoose')
const dotenv = require('dotenv')



// External routes //
const Cars = require('./endpoints/cars')
const Popular = require('./endpoints/popular')
const Novedades = require('./endpoints/novedades')

////////////////////

// Server run //
const app = express()
const port = 3000

///////////////


dotenv.config();


// Mongo DB and mongoose connection and validation //
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos exitosa')
})

connection.on('error', (err) => {
        console.log('Conexion a la base de datos Fallida', err)
    })
    ////////////////////////////////////////////////////

// MIDDLEWARES //
app.use(express.json())
app.use('/api', Cars)
app.use('/api', Popular)
app.use('/api', Novedades)

////////////////


// Routing //
app.get('/', (req, res) => {
        res.json({
            response: 'success'
        })
    })
    ////////////

app.listen(process.env.PORT || port, () => console.log(`Running on Port: ${port}`))