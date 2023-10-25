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

## body-parser
### Descrição
Middleware de análise de corpo Node.js.

Analise os corpos das solicitações recebidas em um middleware antes de seus manipuladores, disponíveis na req.bodypropriedade.

### Comando para instalação
```
npm i body-parser
```

## sequelize/sequelize-cli/path
- após instalação, rodar `npx sequelize-cli init` para criar arquitetura do projeto

### Comando para instalação
```
npm i sequelize sequelize-cli path
```

### Comando para criar models
- O `id` não é criado dentro da model, porém, é criado em migrations
- Dentro do sequelize nós criamos as reagras dos atributos, como: notNull, auto increment, PK e FK
```
npx sequelize-cli model:create --name <nomeDaClasse> --attributes <atributosDaClasse>
```
### Comando de migração do sequelize 
- Cria as tabelas no banco
```
npx sequelize-cli db:migrate
```

### Comando para gerar Seed
```
npx sequelize-cli seed:generate --name <nomeDoArquivo>
```

### Comando para semear as tabelas do bd
```
npx sequelize-cli db:seed:all
```