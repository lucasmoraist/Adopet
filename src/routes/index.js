const bodyParser = require('body-parser')

const tutor = require('./tutorRoutes.js')
const pet = require('./petRoutes.js')
const abrigo = require('./abrigoRoutes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tutor,
        pet,
        abrigo
    )
}