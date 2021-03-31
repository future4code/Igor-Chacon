import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import updateUser from "../data/updateUser";

export default async function getUserById(
    req: Request,
    res: Response
) {
    try {
        if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''  
        ) {
            res.status(400).send({ 
                message: "Please, fill all fields."
            });
        };

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400).send({ 
                message: "Please, choose at least one fild to update."
            });
        };

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        );

        res.status(200).send({
            message: "User updated successfully."
        })
        
    } catch (error) {
        res.status(400).send({ 
            message: error.message || error.sqlMessage
        })
    }
}