import { connection } from ".."

export default async function selectAllUsersOrdered(
   orderBy: string
):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderBy};
    `)
 
    return result[0]
 }