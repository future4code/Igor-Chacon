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
-- SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

-- e)
-- Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
-- o erro é que está escrito 'nome' e não 'name'

-- 4.
-- SELECT * FROM Actor
-- WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
-- a)
-- Essa query está selecionando atores cujo nome começa com A ou J e cujo salário é maior que 300000

-- b)
-- SELECT * FROM Actor
-- WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- c)
-- SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

-- d)
-- SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


-- 5.

CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
	rating INT NOT NULL
);

INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);

INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, 
  sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);

INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de 
  culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);

INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES(
  "004", 
  "O auto da compadecida",
  "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. 
  Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, 
  inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. 
  Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
  "2000-09-15", 
  "10"
);

-- 6.
-- a)
-- SELECT id, name, rating FROM Films WHERE id = 001;

-- b)
-- SELECT id, name, rating FROM Films WHERE id = 001;

-- c)
-- SELECT id, name, sinopse FROM Films WHERE rating > 7;


-- 7
-- a)
-- SELECT id, name FROM Films WHERE name LIKE "%vida%";

-- b)
-- SELECT id, name FROM Films WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";

-- c)
-- SELECT id, name, release_date FROM Films WHERE release_date < '2012-01-01';

-- d)
-- SELECT * FROM Films WHERE release_date < "2021-03-22" AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND rating > 7;


