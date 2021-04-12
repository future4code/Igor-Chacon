import {connection}  from '../';

const aula50Table = "aula50"

export default async function createUser(id: string, name: string, email: string, password: string, role: string) {
    await connection
        .insert({ 
            id,
            name,
            email,
            password,
            role
        })
        .into(aula50Table)
};