import db from '../config/db.js'
import sql from 'mssql'

class AbrigoController {

    static async findAll(req, res) {
        try {
            await sql.connect(db);

            const result = await sql.query('SELECT * FROM pets');

            res.json(result.recordset);
        } catch (err) {
            console.error('Erro de conexão:', err);
            res.status(500).send('Erro de conexão com o banco de dados');
        }
    }

    static async create(req, res) {

        const { id, nome, telefone, endereco } = req.body;

        await sql.connect(db);

        const result = await sql.query`INSERT INTO abrigo (id, nome, telefone, endereco) VALUES (${id}, ${nome}, ${telefone}, ${endereco})`;
        res.json(result);
    } catch(err) {
        console.error('Erro ao criar o produto:', err);
        res.status(500).send('Erro ao criar o produto');
    }

    static async update(req, res){
        try {
            const { nome, telefone, endereco } = req.body;

            const { id } = req.params;

            await sql.connect(db);

            const result = await sql.query`UPDATE abrigo SET nome = ${nome}, telefone = ${telefone}, endereco = ${endereco} WHERE id = ${id}`;
            res.json(result);
        } catch (err) {
            res.status(500).send('Erro ao atualizar o registro', err);
        }
    }

    static async delete(req, res){
        try {
            const { id } = req.params;
            await sql.connect(db);
            const result = await sql.query`DELETE FROM abrigo WHERE id = ${id}`;
            res.json({ message: 'Registro excluído com sucesso' });
        } catch (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).send('Erro ao excluir o registro');
        } 
    }
}

export default AbrigoController