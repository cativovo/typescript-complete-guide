import express from 'express';
import cookieSession from 'cookie-session';
import { authRouter } from './routes/loginRoute';
import { rootRouter } from './routes/rootRoute';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

const app = express();
const router = AppRouter.getInstance();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jkjkj'] }));

app.use(authRouter);
app.use(rootRouter);
app.use(router);

export { app };
