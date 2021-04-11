import { Response, Request } from "express";
import selectAllUsersOrdered from "../data/selectAllUsersOrdered";

export const getAllUsersOrdered = async(req: Request,res: Response): Promise<void> =>{
    try {
       let orderBy = req.query.orderBy || 'email';
       const users = await selectAllUsersOrdered(orderBy as string)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found");
       };

       if(orderBy != 'email' && orderBy != 'name' && orderBy != 'type'){
         res.statusCode = 404
         throw new Error("Invalid OrderBy");
      }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }