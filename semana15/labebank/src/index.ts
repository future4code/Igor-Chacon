import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

type User = {
    nome: string,
    cpf: number,
    dataDeNascimento: Date
}

let users: User[] = []

app.put('/createUser', (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: User = {
            nome: req.body.name,
            cpf: req.body.cpf,
            dataDeNascimento: req.body.date
        }

        if(!reqBody.nome || 
            !reqBody.cpf || 
            !reqBody.dataDeNascimento
            ){
             errorCode = 422;
             throw new Error("Please check the fields.")
         }
    } catch (error) {
        
    }
})