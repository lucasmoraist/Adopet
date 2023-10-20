import tutores from "../models/Tutor.js";

class tutorController{

    static getAll = (req, res) => {
        tutores.find((err, autores)=>{
            if(!err){
                res.status(200).json(autores)
            }else{
                res.status(500).send({message: `${err.message} - falha ao buscar tutores`})
            }
        })
    }

    static getId = (req, res) => {
        const id = req.params.id;

        tutores.findById(id, (err, tutores) => {
            if(!err){
                res.status(200).send(tutores)
            } else {
                res.status(400).send({message: `${err.message} - id não encontrado`})
            }
        })
    }

    static newPost = (req, res) => {
        let tutor = new tutores(req.body);

        tutor.save((err) => {
            if(!err){
                res.status(201).send(tutor.toJSON())
            } else {
                res.status(500).send({message: `${err.message} - falha ao cadastrar tutor`})
            }
        })
    }

    static updateTutor = (req, res) => {
        const id = req.params.id;

        tutores.findByIdAndUpdate(id, {$set: req.body},(err) => {
            if(!err){
                res.status(200).send({message: 'Tutor atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao atulizar`})
            }
        })
    }

    static deleteTutor = (req, res) => {
        const id = req.params.id

        tutores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Excluido com sucesso`})
            } else {
                res.status(500).send({message: `${err.message} - id inexistente`})
            }
        })
    }

}

export default tutorController;