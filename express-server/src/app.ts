import express from 'express';
import cookieSession from 'cookie-session';
import { authRouter } from './routes/loginRoute';
import { rootRouter } from './routes/rootRoute';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jkjkj'] }));

app.use(authRouter);
app.use(rootRouter);

export { app };
