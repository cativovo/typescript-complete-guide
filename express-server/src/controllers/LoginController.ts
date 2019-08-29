import { Request, Response, NextFunction } from 'express';
import {
  get, controller, post, bodyValidator, use,
} from './decorators';
import { auth } from '../middleware/auth';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
                <form method="POST">
                  <div> 
                      <label>Email</label>
                      <input type="text" name="email"/>
                  </div> 
                  <div> 
                      <label>Password</label>
                      <input type="password" name="password"/>
                  </div> 
                  <button type="submit">Submit</button>
                </form>
            `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password }: { email: string; password: string } = req.body;

    const hardCodedEmail = 'test@test.com';
    const hardCodedPassword = '1234';

    if (email && password && email === hardCodedEmail && password === hardCodedPassword) {
      req.session = { isLoggedIn: true };
      res.redirect('/');
      return;
    }

    res.status(400).send('Invalid email or password');
  }

  @get('/logout')
  @use(auth)
  getLogout(req: Request, res: Response): void {
    if (req.session && req.session.isLoggedIn) {
      req.session = undefined;
    }

    res.redirect('/');
  }
}
