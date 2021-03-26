-- 1
-- a)
uma chave estrangeira é uma chave que:
Pode ser nula (NOT NULL);
É um campo em uma tabela que faz referência a um campo que é chave primária em outra tabela;
É possível ter mais de uma (ou nenhuma) em uma tabela.

-- b)
-- para criar a tabela:
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

-- para criar o comentário:
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

-- c)
-- a resposta é:
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-igor-chacon`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
o id estrangeira não é válida

-- d) 
-- ALTER TABLE Movie DROP COLUMN rating;

-- e)
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-igor-chacon`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- não é possível apagar pois o filme é uma "linha pai", pois está associada a uma chave estrangeira. 

-- 2
-- a)
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- a query cria uma tabela chamada MovieCast. Essa table atem um movie_id que é um varchar(255), um actor_id do mesmo tipo e relaicona duas chaves estrangeiras, uma é o id da tabela Movie e outra que é o id da tabela Actor.

-- b)
-- INSERT INTO MovieCast (movie_id, actor_id) 
VALUES (
		"004",
        "006"
);

INSERT INTO MovieCast (movie_id, actor_id) 
VALUES (
		"004",
        "007"
);

INSERT INTO MovieCast (movie_id, actor_id) 
VALUES (
		"005",
        "006"
);

INSERT INTO MovieCast (movie_id, actor_id) 
VALUES (
		"005",
        "007"
);

-- c)
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-igor-chacon`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- ele não adiciona pois não encontra a chave estrangeira correspondente

-- d)
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-igor-chacon`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- não é possível deletar pois há uma correspondência por chave estrangeira

-- 3
-- a)
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
-- a query pega os os filmes que tem atores relacionados a ela (que tem chave estrangeira atrelada) e os mostra, agrupando por filme. o ON diz em que tabela e com que parâmetro (no caso id) deve ser feita a relação.

-- b)
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

-- 4
-- a)
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

-- b)
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

-- c)
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

-- 5

