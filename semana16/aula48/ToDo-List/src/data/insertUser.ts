import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string
) {
    await connection.insert({
        id: id,
        name,
        nickname,
        email,
    }).into('to_do_list_users');
};

