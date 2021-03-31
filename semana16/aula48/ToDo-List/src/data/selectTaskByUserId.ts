import { connection } from "..";
import moment from 'moment';

export default async function selectTaskByUserId(
    id: string
): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM to_do_list_tasks 
        JOIN to_do_list_users
        ON author_id = to_do_list_users.id
        WHERE author_id = '${id}';
    `)
    
    const tasks = result.forEach((task: { id: any; title: any; description: any; deadline: moment.MomentInput; status: any; author_id: any; author: any; nickname: any; email: any; }) => {
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
    });

    return result[0];
}