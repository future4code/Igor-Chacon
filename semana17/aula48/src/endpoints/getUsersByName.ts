import selectUserByName from "../data/selectUserByName"
import { Response, Request } from "express";

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectUserByName(req.params.name)
 
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