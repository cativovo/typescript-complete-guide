import express from 'express';
import { loginRouter } from './routes/loginRoute';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(loginRouter);

export { app };
