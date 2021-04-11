import { Response, Request } from "express";
import selectFiveUsers from "../data/selectFiveUsers";

export const getFiveUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const page = req.params.page
       const users = await selectFiveUsers(page);
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found");
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }