import { Response, Request } from 'express';
import connection from '../../connection';
import { recipesTableName } from '../../types';

export default async function getRecipeById(
    req: Request, 
    res: Response
): Promise<void> {
    try {

        const [recipe] = await connection(recipesTableName)
            .where({ id: req.params.id });

        res.send({recipe});

    } catch (error) {
        console.log(error.message);
        
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message);
        }
    }
}