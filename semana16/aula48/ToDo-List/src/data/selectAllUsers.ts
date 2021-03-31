import { connection } from "..";

export default async function selectAllUsers() {
    const result = await connection.raw(`
        SELECT id, nickname FROM to_do_list_users;
    `)

    return result[0];
}