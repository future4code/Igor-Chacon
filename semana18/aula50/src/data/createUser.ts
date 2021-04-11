import {connection}  from '../';

const aula50Table = "aula50"

export default async function createUser(id: string, name: string, password: string) {
    await connection
        .insert({ 
            id,
            name,
            password
        })
        .into(aula50Table)
};