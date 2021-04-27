import { UserInputDTO, LoginInputDTO, BandInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    async createUser(user: UserInputDTO) {

        try {
            if(!user.name || !user.email || !user.password) {
                throw new Error("User name, email and password must be provided");
            }
    
            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();
    
            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(user.password);
    
            const userDatabase = new UserDatabase();
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
    
            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({ id, role: user.role });
    
            return accessToken;
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }   
    }

    async getBandByNameOrId(name: any) {
        const userDatabase = new UserDatabase();
        const bandFromDB = await userDatabase.getBandByNameOrId(name);

        if (!name) {
            throw new Error("Invalid name.");
        }

        return ({bandFromDB});
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }

    async createBand(band: BandInputDTO) {
        try {
            if(!band.name || !band.music_genre || !band.responsible) {
                throw new Error("User name, gender and responsible must be provided");
            };

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const userDatabase = new UserDatabase();
            await userDatabase.createBand(id, band.name, band.music_genre, band.responsible);

            const message = "Band created successfully!";

            return console.log(message);

        } catch(error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}