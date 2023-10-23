const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get("/", (req, res) => res.status(200).send({message: "Hello World!"}))

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`));

module.exports = app;