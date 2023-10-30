import db from '../config/db.js'
import sql from 'mssql'

class PetController {

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

        const { id, nome, idade, porte, caracteristica } = req.body;

        await sql.connect(db);

        const result = await sql.query`INSERT INTO pets (id, nome, idade, porte, caracteristica) VALUES (${id}, ${nome}, ${idade}, ${porte}, ${caracteristica})`;
        res.json(result);
    } catch(err) {
        console.error('Erro ao criar o produto:', err);
        res.status(500).send('Erro ao criar o produto');
    }

    static async update(req, res){
        try {
            const { nome, idade, porte, caracteristica } = req.body;

            const { id } = req.params;

            await sql.connect(db);

            const result = await sql.query`UPDATE pets SET nome = ${nome}, idade = ${idade}, porte = ${porte}, caracteristica = ${caracteristica} WHERE id = ${id}`;
            res.json(result);
        } catch (err) {
            res.status(500).send('Erro ao atualizar o registro', err);
        }
    }

    static async delete(req, res){
        try {
            const { id } = req.params;
            await sql.connect(db);
            const result = await sql.query`DELETE FROM pets WHERE id = ${id}`;
            res.json({ message: 'Registro excluído com sucesso' });
        } catch (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).send('Erro ao excluir o registro');
        } 
    }
}

export default PetController