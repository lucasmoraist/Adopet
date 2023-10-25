const { Router } = require('express')
const TutorController = require('../controllers/TutorController.js')

const router = Router()

router
    .get('/tutores', TutorController.findAll)
    .get('/tutores/:id', TutorController.findById)
    .post('/tutores', TutorController.create)
    .put('/tutores/:id', TutorController.update)
    .delete('/tutores/:id', TutorController.delete)

module.exports = router