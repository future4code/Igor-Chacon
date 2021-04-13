import { Response, Request } from 'express';

export default async function getRecipeById(
    req: Request, 
    res: Response
): Promise<void> {
    try {

    } catch (error) {
        console.log(error.message);
        
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message);
        }
    }
}