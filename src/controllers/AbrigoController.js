const bd = require('../models')

class AbrigoController {

    static async findAll(req, res){
        try {
            const abrigos = await bd.Abrigos.findAll()
            return res.status(200).json(abrigos)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async findById(req, res){
        const { id } = req.params

        try{
            const abrigo = await bd.Abrigos.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(abrigo)
        } catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res){
        try {
            const abrigo = await bd.Abrigos.create(req.body)
            return res.status(200).json(abrigo)
        }catch (e){
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Abrigos.update(infos, {
                where: { id: Number(id) }
            })
            const abrigo = await bd.Abrigos.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(abrigo)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params

        try{
            await bd.Abrigos.destory({
                where: { id: Number(id) }
            })
            return res.status(200).send(`${id} excluido com sucesso`)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }
}

module.exports = AbrigoController;