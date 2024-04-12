const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require("body-parser")
const { swaggerDocs } = require("./Swagger")
const { mongoConnection } = require('./db')
const cors = require('cors')



// External routes //
const Cars = require('./endpoints/cars')
const Popular = require('./endpoints/popular')
const Novedades = require('./endpoints/novedades')

////////////////////

// Server run //
const app = express()

///////////////


dotenv.config();
mongoConnection(process.env.MONGODB_URI);



// MIDDLEWARES //
app.use(cors())
app.use(express.json())
app.use('/', Cars)
app.use('/', Popular)
app.use('/', Novedades)

////////////////

// Routing //

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

app.get('/', (req, res) => {
        res.json({
            response: 'success'
        })
    })
    ////////////



app.listen(process.env.PORT, () => {
    console.log(`Running on Port: ${process.env.PORT}`);
    swaggerDocs(app, process.env.PORT);
})