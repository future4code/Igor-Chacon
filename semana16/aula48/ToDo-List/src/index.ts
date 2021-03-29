import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
import getAllUsers from "./endpoints/getAllUsers";
import getTaskByUserId from "./endpoints/getTaskByUserId";

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

app.get('/user/all', getAllUsers);
app.put('/user', createUser);
app.get('/user/:id', getUserById);
app.post('/user/edit/:id', editUser);


app.put('/task', createTask);
app.get('/task/:id', getTaskById);

app.get('/tasks/:id', getTaskByUserId);


app.get('/', async (req, res) => {
    try {
        res.send("Server is running!!!");
    } catch (error) {
        res.send("Server is NOT running!");
    }
})

app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
})