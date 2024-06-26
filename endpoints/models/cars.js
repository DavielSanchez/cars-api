const { default: mongoose } = require("mongoose")

const carSchema = mongoose.Schema({
    carBrand: { type: String, required: false },
    carModel: { type: String, required: false },
    carYear: { type: String, required: false },
    carPrice: { type: String, required: false },
    Engine: { type: String, required: false },
    exteriorColor: { type: String, required: false },
    interiorColor: { type: String, required: false },
    Fuel: { type: String, required: false },
    Transmission: { type: String, required: false },
    Traction: { type: String, required: false },
    Type: { type: Array, required: false },
    Usage: { type: String, required: false },
    Doors: { type: String, required: false },
    Passengers: { type: String, required: false }

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
})




module.exports = mongoose.model('Cars', carSchema)