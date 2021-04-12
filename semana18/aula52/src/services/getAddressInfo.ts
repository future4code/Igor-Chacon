import axios from 'axios';
import { addressInfo } from './types';

const baseURL: string = 'https://viacep.com.br/ws';

export default async function getAddressInfo(
    cep: string,
): Promise<addressInfo> {
    try {
        const response = await axios.get(`${baseURL}/${cep}/json`);

        const  {logradouro, bairro, localidade, uf} = response.data
        
        return { 
            street: logradouro,
            neighbourhood: bairro,
            city: localidade,
            state: uf
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}