import { connection } from "..";

const aula50 = "aula50";

export default async function selectLogedUser(
    id: string
):Promise<any> {
    const result = await connection
        .select("*")
        .from(aula50)
        .where({ id });
 
    return result[0];
 };