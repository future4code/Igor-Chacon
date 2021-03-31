import { Request, Response } from "express";
import selectTaskByUserId from "../data/selectTaskByUserId";
import moment from 'moment';

export default async function getTaskByUserId(
    req: Request,
    res: Response
) {
    try {
        const tasks = await selectTaskByUserId(req.params.id);

        if (!tasks) {
            res.status(404).send({
                message: "User not found!"
            })
        };

        const result = await tasks.forEach((task: { id: any; title: any; description: any; deadline: moment.MomentInput; status: any; author_id: any; author: any; nickname: any; email: any; }) => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
                deadline: moment(task.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                status: task.status,
                authorId: task.author_id,
                name: task.author,
                nickname: task.nickname,
                email: task.email 
            }
        })
        

        res.status(200).send(
            tasks.map((task: { id: any; title: any; description: any; deadline: moment.MomentInput; status: any; author_id: any; author: any; nickname: any; email: any; }) => {
                return {
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    deadline: moment(task.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                    status: task.status,
                    authorId: task.author_id,
                    name: task.author,
                    nickname: task.nickname,
                    email: task.email 
                }
            })
        )
        
    } catch (error) {
        res.status(400).send({ 
            message: error.message || error.sqlMessage
        })
    }
}