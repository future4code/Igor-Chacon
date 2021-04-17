import cors from 'cors';
import express from 'express';
import { userRouter } from './routes/userRouter';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/');
app.use("/user", userRouter);

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});