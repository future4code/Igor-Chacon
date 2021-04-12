-- 2. No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

-- CEP
-- Logradouro
-- Número
-- Complemento (opcional)
-- Bairro
-- Cidade
-- Estado

-- resposta:
CREATE TABLE aula52_enderecos (
CEP VARCHAR(8) PRIMARY KEY,
logradouro VARCHAR(255) NOT NULL,
numero VARCHAR(10) NOT NULL,
complemento VARCHAR(255),
bairro  VARCHAR(255) NOT NULL,
cidade VARCHAR(255) NOT NULL,
estado  VARCHAR(2) NOT NULL);