const bodyParser = require('body-parser')

const tutor = require('./tutorRoutes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tutor
    )
}