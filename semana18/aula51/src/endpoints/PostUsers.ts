import { Response, Request } from "express";
import {connection} from "../";
import { generateId } from "../services/idGenerator"
import createUser from "../data/createUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/generateHash";

export const PostUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { 
            name, email, password
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

        // emcription
        const cypherText = await hash(password);
        console.log("senha hasheada: ", cypherText);
        
        

        const userEmail = req.body.email;
        if (userEmail?.search("@") === -1) {
            res.statusCode = 422;
            throw new Error("Invalid e-mail.");
        }

        // const userPassword = req.body.password;
        // const passwordSize = userPassword.length()
        // console.log(`tamanho do password ${passwordSize}`)
        // if (passwordSize <= 6) {
        //     res.statusCode = 500;
        //     throw new Error("Invalid Password (too short).");
        // }
        const id: string = generateId()
        const token: string = generateToken({ id });
        const newUser = {id, name, email, cypherText}
        createUser(id, name, email, cypherText);
        res.send({token});

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


