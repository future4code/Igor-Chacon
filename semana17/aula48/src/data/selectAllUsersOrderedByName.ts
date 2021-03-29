import { connection } from ".."

export default async function selectAllUsersOrderedByName():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY name;
    `)
 
    return result[0]
 }