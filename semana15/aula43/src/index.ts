//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
];

app.get('/users', (req: Request, res: Response) => {
    const result = users
    res.status(200).send(result)
});

// 1. usamos o método get e a entidade é /users/all
app.get('/users/all', (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name
    }));
    res.status(200).send(result)
});

// 2. o parametro do type foi pego em req.params.type
// para utilizar apenas types válidos, temos que usar enum no type do type user
app.get('/users/:type', (req: Request, res: Response) => {
    const tipo: string = req.params.type;

    const user = users.filter((us) => {
        return us.type === tipo
    });

    const result: user | undefined = users.find(
        user => user.type === req.params.type
    )

    if (result) {
        res.status(200).send(user);
    } else {
        res.status(404).send("Not Found!")
    }

});

// 3.
app.get('/usersName/:name', (req: Request, res: Response) => {
    const nome: string = req.params.name;

    const user = users.filter((us) => {
        return us.name === nome
    });    

    const result: user | undefined = users.find(
        user => user.name === req.params.name
    )

    if (result) {
        res.status(200).send(user);
    } else {
        res.status(404).send("No user found!!!")
    }

});

// 4. ao mudar o método para put consegui manipular o array user, na linha 135 para
// ter o novo id atualizado...
// b) é possível usar o put aqui, já que queremos apenas armazenar uma nova informação
app.put('/addUser', (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {

        //const {id, name, email, type, age} = req.body;
        let newId = users.length + 1
        const reqBody: user = {
            id: newId,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if(!reqBody.age || 
           !reqBody.email || 
           !reqBody.id || 
           !reqBody.name || 
           !reqBody.type){
            errorCode = 422;
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send({message: "User created successfully"})
        //201 é created, http.cat/201
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
});

// 5.
app.put('/users/mod/:id', (req: Request, res: Response) =>{
    let errorCode: number = 400;
    const id = Number(req.params.id);

    const user = users.filter((us) => {
        return us.id === id
    });

    try {
        const reqBody = {
            name: req.body.name + "-ALTERADO"
        };

        if (!reqBody.name) {
            errorCode = 422;
            throw new Error("Please check the fields.");
        };
        
        users[id-1].name = reqBody.name

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    };
    res.status(200).send()
})

// 6.
app.patch('/users/realterar/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let body = req.body;

    for (let b in body) {
        console.log(b);
        console.log(body[b]);
    }
    res.status(201).send("Send!");
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
