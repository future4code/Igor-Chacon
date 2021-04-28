import { Request, Response } from 'express';
import connection from '../../connection';
import { generateToken } from '../../services/authenticator';
import { generateHash } from '../../services/hashManager';
import generageId from '../../services/idGenerator';
import { userTableName } from '../../types';

export default async function signup(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.statusCode = 401;
            throw new Error('"name", "email" or "password" is required');
        };

        if (password.length < 6 ) {
            res.statusCode = 422;
            throw new Error('Password too short');
        };

        const [user] = await connection(userTableName)
            .where({email})

        if (user) {
            res.statusCode = 409;
            throw new Error('Email already in use')
        }

        const id: string = generageId();

        const cypherPassword: string = generateHash(password);

        await connection(userTableName)
            .insert({id, name, email, password: cypherPassword})

        const token: string = generateToken({id});

        res.send({token});
        
    } catch (error) {
        console.log(error.message);

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message);
        }
        
    }
}