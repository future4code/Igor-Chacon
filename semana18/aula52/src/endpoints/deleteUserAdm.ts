import deleteUser from "../data/deleteUser"
import { Response, Request } from "express";
import { getTokenData } from "../services/authenticator";
import { userRole } from "../services/types";

export const deleteUserAdm = async (req: Request, res: Response): Promise<any> => {
    try {

        const token = req.headers.authorization as string;
        const autenticationData = getTokenData(token);


        if (autenticationData.role !== userRole.ADMIN.toUpperCase()) {
            res.statusCode = 401;
            throw new Error("You're not allowed to do this!");
        };

        await deleteUser(req.params.id);

        res.status(200).send("Deleted user!");

    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }
}