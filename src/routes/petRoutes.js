import { Router } from 'express'
import PetController from '../controllers/PetController.js'

const router = Router()

router
    .get('/pets', PetController.findAll)
    .post('/pets', PetController.create)
    .put('/pets/:id', PetController.update)
    .delete('/pets/:id', PetController.delete)

export default router;