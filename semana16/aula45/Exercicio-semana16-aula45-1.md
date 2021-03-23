-- 1
-- a)
-- ALTER TABLE Actor DROP COLUMN salary;
-- o DROP remove uma coluna da tabela. No caso, o comando está removendo a coluna salary da tabela
-- Actor

-- b)
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- change é utilizado para renomear uma coluna e alterar suas definições, 
-- como o tipo de dados de uma coluna. Assim, estamos mudando o nome da coluna gender para sex e seu valor será um varchar(6)

-- c)
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- aqui estamos mudando apenas o tipo de dado na coluna gender, que agora será um varchar(255)

-- d)
-- o comando é:
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


-- 2
-- a)
-- UPDATE Actor SET name = "Antônio FaFa" WHERE id = "003";

-- b)
-- UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";
-- UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";

-- c)
-- UPDATE Actor SET name = "JULIANA PAES", salary = 720000, birth_date = "1979-03-27" WHERE id = "005";

-- d)
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- nada é alterado

-- 3
-- a)
-- DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b)
-- DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- 4
-- a)
-- SELECT MAX(salary) FROM Actor;

-- b) 
-- SELECT MAX(salary) FROM Actor WHERE gender = "female";

-- c)
-- SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d)
-- SELECT SUM(salary) FROM Actor;

-- 5
-- a)
-- a query retorna uma tabela com a contagem de quantos male e female tem na tabela.

-- b)
-- SELECT id, name FROM Actor ORDER BY name DESC;

-- c)
-- SELECT * FROM Actor WHERE gender = "male" ORDER BY salary ASC;

-- d)
-- SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;

-- e)
-- SELECT AVG(salary), gender FROM Actor group by gender;

