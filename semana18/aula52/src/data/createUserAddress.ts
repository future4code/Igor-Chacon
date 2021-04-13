import {connection}  from '../';

const aula50TableEnderecos = "aula52_enderecos";

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
        .into(aula50TableEnderecos)
};