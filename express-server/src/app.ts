import express from 'express';
import cookieSession from 'cookie-session';
import { loginRouter } from './routes/loginRoute';
import { rootRouter } from './routes/rootRoute';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jkjkj'] }));

app.use(loginRouter);
app.use(rootRouter);

export { app };
