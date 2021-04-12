import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { PostUsers } from "./endpoints/PostUsers";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUser } from "./endpoints/getUser";
import { postLogin } from "./endpoints/postLogin";
import { getLogedUser } from "./endpoints/getLogedUser";
import { deleteUserAdm } from "./endpoints/deleteUserAdm";
import  getAddressInfo  from "./services/getAddressInfo";

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
app.delete('/user/:id', deleteUserAdm);


  getAddressInfo("05424150").then(console.log)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;