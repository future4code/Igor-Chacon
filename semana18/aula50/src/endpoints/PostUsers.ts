import { Response, Request } from "express";
import {connection} from "../";
import { generateId } from "../services/idGenerator"
import createUser from "../data/createUser";

export const PostUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { 
            name, password
        } = req.body;

        if (!name || !password) {
            res.statusCode = 422;
            throw new Error("Name, email and password is required");
        };

        const [user] = await connection('aula50').where({ name });
        if (user) {
            res.statusCode = 409
            throw new Error("User already exists");
        };

        const id: string = generateId();

        createUser(id, name, password);

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}