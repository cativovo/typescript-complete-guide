import { Request, Response } from 'express';
import { controller, get, use } from './decorators';
import { auth } from '../middleware/auth';

// using 2 same path may cause bugs so leave controller's arg as an empty string
@controller('')
export class RootController {
  @get('/')
  getIndex(req: Request, res: Response): void {
    if (req.session && req.session.isLoggedIn) {
      res.send(`
            <div>
              <div>
                You are logged in
              </div>
              <a href="/auth/logout">Logout</a>
            </div>
          `);
      return;
    }

    res.send(`
        <div>
          <div>
            You are NOT logged in
          </div>
          <a href="/auth/login">Login</a>
        </div>
      `);
  }

  @get('/protected')
  @use(auth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to protected route');
  }
}
