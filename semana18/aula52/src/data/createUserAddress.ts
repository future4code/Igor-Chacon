import {connection}  from '../';

const aula50Table = "aula50"

export default async function createUserAddress(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string
) {
    await connection
        .insert({ 
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        })
        .into(aula50Table)
};