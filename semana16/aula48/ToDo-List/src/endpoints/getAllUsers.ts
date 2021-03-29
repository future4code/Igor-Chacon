import selectAllUsers from "../data/selectAllUsers";
import { Request, Response } from 'express';

export default async function getAllUsers(
    req: Request,
    res: Response
) {
    try {
        const result = await selectAllUsers();

        if (!result) {
            res.status(404).send(
                []
            );
        };

        res.status(200).send(
            result
        );
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        });
    }
}