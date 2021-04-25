import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO, BandInputDTO, GetBandInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class UserController {
    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getBand(req: Request, res: Response) {
        try {
            const name: string = req.body.name;

            if (!name) {
                throw new Error("Invalid band name!");
            };

            const userBusiness = new UserBusiness();
            const selectedBand = await userBusiness.getBandByNameOrId(name);

            res.status(200).send({ selectedBand });
            
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        
        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();

    }

    async signUpBand(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                name:  req.body.name,
                music_genre:  req.body.gender,
                responsible:  req.body.responsible
            };

            const userBusiness = new UserBusiness();
            const result = await userBusiness.createBand(input);

            res.status(200).send({ result });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}