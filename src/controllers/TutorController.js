const bd = require('../models')

class TutorController {

    static async findAll(req, res){
        try {
            const tutores = await bd.Tutores.findAll()
            return res.status(200).json(tutores)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async findById(req, res){
        const { id } = req.params

        try{
            const tutor = await bd.Tutores.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(tutor)
        } catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res){
        try {
            const tutor = await bd.Tutores.create(req.body)
            return res.status(200).json(tutor)
        }catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Tutores.update(infos, {
                where: { id: Number(id) }
            })
            const tutor = await bd.Tutores.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(tutor)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params

        try{
            await bd.Tutores.destory({
                where: { id: Number(id) }
            })
            return res.status(200).send(`${id} excluido com sucesso`)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }
}

module.exports = TutorController;