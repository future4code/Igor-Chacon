CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
-- 1 a)
-- CREATE é usado para criar algo
-- CREATE TABLE cria uma tabela
-- VARCHAR é um string com n caracters
-- DATE é uma data e NOT NULL diz que este não pode ser null



-- 1 b)
-- SHOW DATABASES nos mostra o nosso database com seu nome
-- SHOW TABLES nos mostra as tabelas no nosso database

-- 1 c)
-- DESCRIBE "descreve" nossa tabela, isto é, dá suas colunas, se é um PK, se aceita null, etc



-- 2  a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "famale"
);

-- 2 b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Igor Chacon",
  0,
  "1989-06-17", 
  "male"
);
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- "entrada duplicada '002' para a chave 'primária'
-- o erro indica que já há um valor 002 para a chave primária, este valor não pode se repetir

-- 2 c)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'NSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",  ' at line 1
-- Código de erro: 1064. Você tem um erro na sintaxe SQL; verifique o manual que corresponde à versão do seu servidor MySQL para obter a sintaxe correta para usar próximo a 'NSERT INTO Actor (id, nome, salário) VALUES ("003", "Fernanda Montenegro",' na linha 1
-- o erro ocorre porque não colocamos birth_date, gender na declaração

-- d
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fernanda Montenegro",
  400000,
  "1949-04-18", 
  "male"
);

-- Error Code: 1364. Field 'name' doesn't have a default value
-- Código de erro: 1364. O campo 'nome' não tem um valor padrão
-- está faltando o campo 'nome' que não pode ser null

-- e
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
-- o valor da data não está como varchar

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- 3 a)
-- SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

-- b)
-- SELECT salary from Actor WHERE name = "Tony Ramos";

-- c)
-- vem apenas valores null

-- d)

