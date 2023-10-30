import bodyParser from 'body-parser'
import pet from './petRoutes.js'
import abrigo from './abrigoRoutes.js'


export default function routes(app){

    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Bem vindo a Adopet! :)"})
    })

    app.use(
        bodyParser.json(),
        pet,
        abrigo
    )
}