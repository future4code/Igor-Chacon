import { Response, Request } from "express";
import {connection} from "../";
import { generateId } from "../services/idGenerator"
import createUser from "../data/createUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/generateHash";
import { userRole } from "../services/types";

export const PostUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { 
            name, email, password, role
        } = req.body;

        if (!name || !password || !role) {
            res.statusCode = 422;
            throw new Error("Name, email, role and password is required");
        };

        if (role !== userRole.ADMIN && role !== userRole.NORMAL) {
            res.statusCode = 422;
            throw new Error("Role not allowed. Please check for admin or normal");
        }

        const [user] = await connection('aula50').where({ name });
        if (user) {
            res.statusCode = 409
            throw new Error("User already exists");
        };

        // emcription
        const cypherText = await hash(password);
        console.log("senha hasheada: ", cypherText);
        
        

        const userEmail = req.body.email;
        if (userEmail?.search("@") === -1) {
            res.statusCode = 422;
            throw new Error("Invalid e-mail.");
        }

        const id: string = generateId()
        const token: string = generateToken({ id, role });
        createUser(id, name, email, cypherText, role);
        res.send({token});

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


