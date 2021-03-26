

-- 1
-- a) o retorno é um array com a tabela em json e informações da tabela

-- b)
-- app.get('/actor', async (req, res) => {
--    try {
--      const getActor = async (name: string) => {
--        const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`) 
--        return result
 --     }
 --     const atores = await getActor("Tony Ramos");
 --     res.status(200).send(atores);
 -- } catch (error) {
 --     console.log(error.message);
 -- }
--});



-- c)
-- app.get('/actor', async (req, res) => {
--    try {
--      const getActor = async (name: string) => {
--        const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`) 
--        return result
 --     }
 --     const atores = await getActor("Tony Ramos");
 --     res.status(200).send(atores);
 -- } catch (error) {
 --     console.log(error.message);
 -- }
--});

