import { Response, Request } from "express";
import selectUser from "../data/selectUser";
import { generateToken } from "../services/authenticator";

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
        
        if (user?.password !== userData.password) {
            throw new Error("Invalid Password");
        };

        const token = generateToken({ id: user.id });

        res.status(200).send({token});

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}