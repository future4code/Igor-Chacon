SELECT * FROM `epps-igor-chacon`.Films;

SELECT id, name, rating FROM Films WHERE id = 001;

SELECT id, name, rating FROM Films WHERE name = 'O auto da compadecida';

SELECT id, name, sinopse FROM Films WHERE rating > 7;

SELECT id, name FROM Films WHERE name LIKE "%vida%";

SELECT id, name FROM Films WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";

SELECT id, name, release_date FROM Films WHERE release_date < '2012-01-01';

SELECT * FROM Films WHERE release_date < "2021-03-22" AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND rating > 7;