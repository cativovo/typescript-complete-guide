import express from 'express';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();
const router = AppRouter.getInstance();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jkjkj'] }));

app.use(router);

export { app };
