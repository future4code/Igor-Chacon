import { connection } from ".."

export default async function selectFiveUsers(
   page: string
):Promise<any> {
   const pageNumber = (page: string) => {
      if (Number(page) === 1 || Number(page) <= 0 || isNaN(Number(page))) {
         return 0;
      } else if (Number(page) > 1) {
         return ((Number(page)*5)-5);
      }
   }
   
   const offset = pageNumber(page);
   
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      LIMIT 5
      OFFSET ${offset};
   `)
 
    return result[0];
 }