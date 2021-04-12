import { Response, Request } from "express";
import selectUser from "../data/selectUser";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/generateHash";

export const postLogin = async (req: Request,res: Response): Promise<void>=> {
    try {
        if (!req.body.email || req.body.email.search("@") === -1) {
            throw new Error("Invalid e-mail");
        };

        const userData = {
            email: req.body.email,
            password: req.body.password
        };
        
        const user = await selectUser(userData.email);
        
        if (!user) {
            res.statusCode = 401;
            throw new Error("Invalid user");
        };

        const hashCompare = await compare(userData.password, user.password);
        if (!hashCompare) {
            res.statusCode = 401;
            throw new Error("Credenciais inválidas!");
        };


        const token = generateToken({ id: user.id, role: user.role });

        res.status(200).send({token});

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}