import selectUser from "../data/selectUser"
import { Response, Request } from "express";

export const getUser = async(req: Request, res: Response): Promise<void> =>{
    try {
       const users = await selectUser(req.params.email)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }