import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getAllUsersOrderedByName } from "./endpoints/getAllUsersOrderedByName";

const app = express();
dotenv.config();
app.use(express.json());

export const connection = knex({
    client: 'mysql',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
});

app.get('/users', getAllUsers);
app.get('/user/:name', getUsersByName);
app.get('/userordered', getAllUsersOrderedByName);


app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
});