import { connection } from "..";

const aula50 = "aula50";

export default async function deleteUser (id: string): Promise<any> {
    await connection
    .delete()
    .from(aula50)
    .where({ id });
}