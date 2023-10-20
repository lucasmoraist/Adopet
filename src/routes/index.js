import express from 'express'
import tutores from './TutorRoutes.js'

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Bem vindo ao Adopet!"})
    })
    
    app.use(
        express.json(),
        tutores
    )
}

export default routes;