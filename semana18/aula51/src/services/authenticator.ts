import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { AuthenticationData } from './types';

dotenv.config();

const expiresIn = "1min";
 
export const generateToken = (input: AuthenticationData): string => {
    return jwt.sign(
        input,
        String(process.env.JWT_KEY),
        { expiresIn: expiresIn }
    )
}

export const getTokenData = (
    token: string
): AuthenticationData => {
    try {
        const { id } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData;

        return { id };
    } catch (error) {
        console.log(error);
        return error;
    }

    
}
