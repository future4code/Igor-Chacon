import { Response, Request } from "express";
import selectAllUsersOrderedByName from "../data/selectAllUsersOrderedByName";

export const getAllUsersOrderedByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsersOrderedByName()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }