const bd = require('../models')

class PetController {

    static async findAll(req, res){
        try {
            const pets = await bd.Pets.findAll()
            return res.status(200).json(pets)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async findById(req, res){
        const { id } = req.params

        try{
            const pet = await bd.Pets.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pet)
        } catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res){
        try {
            const pet = await bd.Pets.create(req.body)
            return res.status(200).json(pet)
        }catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Pets.update(infos, {
                where: { id: Number(id) }
            })
            const pet = await bd.Pets.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pet)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params

        try{
            await bd.Pets.destory({
                where: { id: Number(id) }
            })
            return res.status(200).send(`${id} excluido com sucesso`)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }
}

module.exports = PetController;