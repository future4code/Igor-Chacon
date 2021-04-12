-- 1. 
-- a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
-- é melhor usar strings, pois cada caractere nos dá 26 possibilidades de letras mais 10 números, mais que apenas 10 números.

-- b.
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);

export function generateId(): string {
    return v4();
  }

-- 2.
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

-- a. Explique o código acima com as suas palavras.
-- o código está criando uma função que cria um usuário com id, email e password na tabela userTableName.


-- b. Comece criando a tabela de usuários. Coloque a query que você utilizou no -- arquivo de respostas.
CREATE TABLE aula50 (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255),
password VARCHAR(255)
);

-- c. Pela mesma justificativa do exercício anterior, crie uma função para ser  -- responsável pela criação de usuários no banco.


-- 3.
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

-- a. O que a linha as string faz? Por que precisamos usar ela ali?
-- criará o token como uma string, para que não seja criada como numbertad

-- b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

-- 7
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
-- 
-- a. O que a linha as any faz? Por que precisamos usá-la ali?
-- promete que a constante será de qualquer type e será aceito assim, evitando erros.

-- b. Crie uma função que realize a mesma funcionalidade da função acima