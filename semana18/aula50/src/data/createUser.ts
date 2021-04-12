import {connection}  from '../';

const aula50Table = "aula50"

export default async function createUser(id: string, name: string, email: string, password: string) {
    await connection
        .insert({ 
            id,
            name,
            email,
            password
        })
        .into(aula50Table)
};