import express from 'express';
import tutorController from '../controller/TutorController.js';

const router = express.Router();

router
    .get("/tutores", tutorController.getAll)
    .get("/tutores/:id", tutorController.getId)
    .post("/tutores", tutorController.newPost)
    .put("/tutores/:id", tutorController.updateTutor)
    .delete("/tutores/:id", tutorController.deleteTutor)

export default router;