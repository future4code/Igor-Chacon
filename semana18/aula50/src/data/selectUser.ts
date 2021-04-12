import { connection } from "..";

export default async function selectUser(
    email: string
):Promise<any> {
    const result = await connection.raw(`
       SELECT email, password
       FROM aula50
       WHERE email = '${email}';
    `)
 
    return result[0];
 }