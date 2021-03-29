import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) { 
            res
                .status(400)
                .send("Name, nickname and e-mail are mandatory");
    }

        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        );

        res.status(200).send("User created!");
        
        
    } catch (error) {
        res.status(400).send({ 
            message: error.message || error.sqlMessage
        })
    }
}