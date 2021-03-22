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
    name: string,
    cpf: string,
    bornDate: string,
    saldo: number,
    extrato: [
        {
            valor: number,
            data: number,
            descricao: string
        }
    ]
}

type Transacoes = {
    valor: number,
    data: number,
    descricao: string
}

let users: User[] = [
    {
        name: "Igor",
        cpf: "082.912.944-88",
        bornDate: "17/06/1989",
        saldo: 0,
        extrato: [
            {
                valor: 0,
                data: 0,
                descricao: "Saldo inicial"
            }
        ]
    }
]

app.get('/users', (req: Request, res: Response)=> {
    const result = users
    res.status(200).send(result)
})

app.put('/createUser', (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: User = {
            name: req.body.name,
            cpf: req.body.cpf,
            bornDate: req.body.bornDate,
            saldo: 0,
            extrato: [
                {
                    valor: 0,
                    data: Date.now(),
                    descricao: 'Saldo inicial'
                }
            ]
        }

        if (!reqBody.name) {
            errorCode = 422;
            throw new Error("Invalid name.")
        }

        if (!reqBody.cpf) {
            errorCode = 422;
            throw new Error("Invalid cpf.")
        }

        if (!reqBody.bornDate) {
            errorCode = 422;
            throw new Error("Invalid born date.")
        }

        if (!reqBody.name || 
            !reqBody.cpf || 
            !reqBody.bornDate
            ){
             errorCode = 422;
             throw new Error("Please check the fields.")
         }


         function calcularIdade(aniversario: string) {
            var nascimento = aniversario.split("/");
            var dataNascimento = new Date(parseInt(nascimento[2], 10),
            parseInt(nascimento[1], 10) - 1,
            parseInt(nascimento[0], 10));
        
            var diferenca = Date.now() -  dataNascimento.getTime();
            var idade = new Date(diferenca);
        
            return Math.abs(idade.getUTCFullYear() - 1970);
        }

        const verifyCpf = () => {
            for (let user of users) {
                let cpfs = user.cpf
                if (cpfs === reqBody.cpf) {
                    errorCode = 422;
                    throw new Error("CPF is already in use.");
                }
            }
        }

        verifyCpf()

        let age: number = calcularIdade(reqBody.bornDate)

         if (age < 18) {
             errorCode = 422;
             throw new Error("User must be 18 years older or more.");
         }

         users.push(reqBody);
         res.status(201).send({message: `User created sucessfully. CPF: ${reqBody.cpf}`!})

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
})

app.get('/getSaldo',  (req: Request, res: Response) => {
    const reqBody = {
        name: req.body.name,
        cpf: req.body.cpf
    }

    let usuario = users.filter((us) => {
        return us.name === req.body.name && us.cpf === req.body.cpf
    })
    const user = usuario[0]
    console.log(user);
    
    res.status(201).send({message: `User saldo: ${user.saldo}`!})
})