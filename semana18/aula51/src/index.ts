import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { PostUsers } from "./endpoints/PostUsers";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUser } from "./endpoints/getUser";
import { postLogin } from "./endpoints/postLogin";
import { getLogedUser } from "./endpoints/getLogedUser";
import { compare, hash } from "./services/generateHash";

const app = express();
dotenv.config();
app.use(express.json());


export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
  },
});

app.post('/user/create', PostUsers);
app.get('/users', getAllUsers);
app.get('/user/:email', getUser);
app.post('/user/login', postLogin);
app.get('/useres/profile', getLogedUser);

async function lalala() {
  const hehehe = await hash("olá");
  console.log(hehehe);

  const comp1 = await compare("olá", "$2a$12$L7vr5iDNXIC.8Dw4Pz3kYuYorfeCx4ss1/hJsGNw1.qD7CxajjdVy");
  const comp2 = await compare("olá", hehehe);
  const comp3 = await compare("oi", hehehe);

  console.log(comp1, comp2, comp3);
  
}


lalala()




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;