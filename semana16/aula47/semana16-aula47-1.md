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

