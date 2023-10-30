import { Router } from "express"
import AbrigoController from '../controllers/AbrigoController.js'

const router = Router()

router
    .get('/abrigos', AbrigoController.findAll)
    .post('/abrigos', AbrigoController.create)
    .put('/abrigos/:id', AbrigoController.update)
    .delete('/abrigos/:id', AbrigoController.delete)

export default router;