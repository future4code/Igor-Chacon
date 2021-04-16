import selectLogedUser from "../data/selectLogedUser"
import { Response, Request } from "express";
import { getTokenData } from "../services/authenticator";
import { userRole } from "../services/types";

export const getLogedUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        const autenticationData = getTokenData(token);    
        const user = await selectLogedUser(autenticationData.id);

        if (autenticationData.role !== userRole.ADMIN.toUpperCase()) {
            res.statusCode = 401;
            throw new Error("You're not allowed to do this!");
        };

        res.status(200).send({
            id: user.id,
            email: user.email,
          });
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }
}