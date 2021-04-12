import {connection}  from '../';
import getAddressInfo from '../services/getAddressInfo';

const aula50Table = "aula50"

export default async function createUserAddress(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
) {
    await connection
        .insert({ 
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
        .into(aula50Table)
};