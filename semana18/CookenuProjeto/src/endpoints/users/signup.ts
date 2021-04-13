import { Request, Response } from 'express';
import connection from '../../connection';
import { generateToken } from '../../services/authenticator';
import { generateHash } from '../../services/hashManager';
import generageId from '../../services/idGenerator';
import { userTableName } from '../../types';

export default async function signup(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body;

        const id: string = generageId();

        const cypherPassword: string = generateHash(password);

        await connection(userTableName)
            .insert({id, name, email, password: cypherPassword})

        const token: string = generateToken({id});

        res.send({token});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}