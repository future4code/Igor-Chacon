import { connection } from "..";

const aula50 = "aula50";

export default async function selectUser(
    email: string
):Promise<any> {
    const result = await connection
        .select("*")
        .from(aula50)
        .where({ email });
 
    return result[0];
 };