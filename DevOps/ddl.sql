
CREATE TABLE Abrigo (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone BIGINT NOT NULL,
    endereco VARCHAR(255) NOT NULL
);


CREATE TABLE Pet (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    porte VARCHAR(50) NOT NULL,
    caracteristica VARCHAR(120) NOT NULL
);
