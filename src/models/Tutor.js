import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        telefone: {type: Number},
        cidade: {type: String},
        sobre: {type: String}
    },
    {
        versionKey: false
    }
)

const tutores = mongoose.model("tutores", tutorSchema)

export default tutores;