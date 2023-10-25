const { Router } = require('express')
const PetController = require('../controllers/PetController.js')

const router = Router()

router
    .get('/pets', PetController.findAll)
    .get('/pets/:id', PetController.findById)
    .post('/pets', PetController.create)
    .put('/pets/:id', PetController.update)
    .delete('/pets/:id', PetController.delete)

module.exports = router