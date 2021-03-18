import express, { Request, Response, response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();
app.use(express.json());
app.use(cors());



app.get('/countries/all', (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }));
      
      res.status(200).send(result);

});

app.get('/countries/search', (req: Request, res: Response) => {

    const country: string = req.query.country as string;
    const myCountries = countries;
    console.log(req.query.name);
    

    if (req.query.name) {
        const filteredCountriesByName = myCountries.filter((ct) => {
            return ct.name.includes(req.query.name as string);
        });
        res.status(201).send(filteredCountriesByName);
    };

    if (req.query.capital) {
        const filteredCountriesCapital = myCountries.filter((ct) => {
            return ct.capital.includes(req.query.capital as string);
        });
        res.status(201).send(filteredCountriesCapital);
    };
    
    if (req.query.continent) {
        const filteredCountriesByContinent = myCountries.filter((ct) => {
            return ct.continent.includes(req.query.continent as string);
        });
        res.status(201).send(filteredCountriesByContinent);
    };

    if (!req.query.name && !req.query.capital && !req.query.continent) {
        res.status(404).send("Not Found!!!");
    };
});

type country = {
    id: number,
    name: string,
    capital: string,
    continent: string
}
app.get('/countries/:id', (req: Request, res: Response) => {

    //req.params é onde ficam os valores passados no path (o caminho da URL)
    const id: number = Number(req.params.id);

    /*iterando pelo array de países, até encontrar um que tenha id
    === ao que foi passado na url. Aqui a tipagem se mostra importante, porque o id
    de um país sempre é um número. */
    const country = countries.find((ct) => {
        return ct.id === id;
    });

    //envio o país encontrado
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }

});

app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            errorCode = 401;
            throw new Error("Invalid authorization. Please fill the field");
        }

        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. Please send a number");
        }

        const myCountries = countries;

        const countryIndex = myCountries.findIndex((ct) => {
            return ct.id === id;
        });

        if (countryIndex < 0) {
            errorCode = 404;
            throw new Error("Country not found");
        }

        countries.splice(countryIndex, 1);

        res.status(200).send("PAIS APAGADO COM SUCESSO");

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }

});

app.put('/countries/edit/:id', (req: Request, res: Response) => {
    const myCountries = countries;
    let errorCode: number = 400;
    const id: number = Number(req.params.id);

    const country = countries.find((ct) => {
        return ct.id === id;
    });

    if (isNaN(id)) {
        throw new Error("Invalid id type. Please send a number");
    }

    if (id > myCountries.length) {
        throw new Error("Country not found");
    }

    const countryIndex = myCountries.findIndex((ct) => {
        return ct.id === id;
    });

    if (countryIndex < 0) {
        errorCode = 404;
        throw new Error("Country not found");
    }

    if (countryIndex < 0) {
        errorCode = 404;
        throw new Error("Country not found");
    }
    console.log(countryIndex);
    const result = {
        name: country?.name,
        capital: country?.capital
    }
    
    res.status(200).send(result)

})

app.listen(3003, () => {
    console.log("Servidor rodando no endereço http://localhost:3003");
});