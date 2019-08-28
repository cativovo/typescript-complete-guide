import { Request, Response, Router } from 'express';
import { auth } from '../middleware/auth';

const rootRouter = Router();

rootRouter.get('/', (req: Request, res: Response): void => {
  if (req.session && req.session.isLoggedIn) {
    res.send(`
      <div>
        <div>
          You are logged in
        </div>
        <a href="/logout">Logout</a>
      </div>
    `);
    return;
  }

  res.send(`
  <div>
    <div>
      You are NOT logged in
    </div>
    <a href="/login">Login</a>
  </div>
`);
});

rootRouter.get('/protected', auth, (req: Request, res: Response): void => {
  res.send('Welcome to protected route');
});

export { rootRouter };
