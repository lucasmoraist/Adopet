const { Router } = require('express')
const AbrigoController = require('../controllers/AbrigoController.js')

const router = Router()

router
    .get('/abrigos', AbrigoController.findAll)
    .get('/abrigos/:id', AbrigoController.findById)
    .post('/abrigos', AbrigoController.create)
    .put('/abrigos/:id', AbrigoController.update)
    .delete('/abrigos/:id', AbrigoController.delete)

module.exports = router