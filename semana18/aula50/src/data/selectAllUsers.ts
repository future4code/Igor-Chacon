import {connection}  from "../";

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name
       FROM aula50;
    `);
 
    return result[0];
 }