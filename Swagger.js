const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Cars API",
            version: "0.1.0",
            description: "Esta aplicacion se encarga del almacenar datos sobre carros para ser usados en un frontend.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            }
        },
        servers: [{
            url: "http://localhost:3000",
        }, ],
    },
    apis: ["./index.js"],
};

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app, port) => {
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );
}

module.exports = { swaggerDocs }