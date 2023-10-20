# Adopet

# Iniciando Projeto

```
npm init -y
```

# Dependencias

## Nodemon
- Versão utilizada: 2.0.15
### Descrição
nodemon é uma ferramenta que ajuda reiniciando automaticamente o aplicativo quando são detectadas alterações no arquivo no diretório.

### Comando para instalação
```
npm install nodemon@2.0.15 -D
```

## Express
- Versão utilizada: 4.17.3

### Comando para instalação
```
npm install express@4.17.3
```

## Mongoose
- Versão utilizada: 6.2.6

### Descrição
Mongoose é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono.

### Comando para instalação
```
npm i mongoose@6.2.6
``` 

## MongoDB
- Versão utilizada: 6.1.0

### Comando para instalação
```
npm i mongodb
```

# Endpoints

## Cadastrar Tutor
`POST` /tutores

| campo | tipo | obriatório | descição
| --- | :---: | :---: | ---
| id| string | sim | é o id do tutor
| nome | text | sim | nome do tutor
| email | text | sim | receberá o email da conta do tutor
| password | String | sim | receberá a senha da conta do tutor
| telefone | Number | não | número do telefone para contato
| cidade | text | não | cidade onde o tutor mora
| sobre | text | não | informações a mais sobre o tutor

**Códigos de Respostas**
| código | descrição
| --- | ---
| 201 | tutor cadastrada
| 400 | erro na validação de dados da requisição

## Listar tutor
`GET` /tutor/{id}

```
{
	"_id": "65329320732f4d05aa5b7092",
	"nome": "Pedro Daniel",
	"email": "pedro@gmail.com",
	"password": "****",
	"telefone": 1140028922,
	"cidade": "São Paulo",
	"sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt sem et scelerisque elementum. Aliquam egestas ultricies sem, non euismod enim blandit sit amet. Nam faucibus massa eu pretium luctus. Vestibulum vehicula efficitur orci, vel rutrum nunc molestie"
},
```

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado tutor com id informado