import { Response, Request } from 'express';
import connection from '../../connection';
import { generateToken, getTokenData } from '../../services/authenticator';
import generateId from '../../services/idGenerator';
import { recipesTableName } from '../../types';

export default async function createRecipe(
    req: Request, 
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization;
        const { title, description } = req.body;

        const tokenData = getTokenData(token!);

        const id = generateId();

        const createdAt = new Date();

        await connection(recipesTableName)
            .insert({ 
                id,
                title,
                description,
                created_at: createdAt,
                author_id: tokenData!.id
            });

            res.send("Recipe created successfully!")

    } catch (error) {
        console.log(error.message);
        
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message);
        }
    }
}