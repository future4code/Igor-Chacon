import { BaseDatabase } from "./BaseDatabase";
import { Band, User } from "../model/User";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "NOME_TABELAS_USUÁRIOS";
  private static TABLE_BAND = "NOME_TABELA_BANDAS";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }

  public async getBandByName(name: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_BAND)
      .where({ name });

    return Band.toUserModel(result[0]);
  }

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(UserDatabase.TABLE_BAND);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
