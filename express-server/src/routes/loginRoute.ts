import { Router, Request, Response } from 'express';
import { auth } from '../middleware/auth';

interface RequestWithUserCredentials extends Request {
  body: {
    email: string | undefined;
    password: string | undefined;
  };
}

const authRouter = Router();

authRouter.get('/login', (req: Request, res: Response): void => {
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
});

authRouter.post('/login', (req: RequestWithUserCredentials, res: Response): void => {
  const { email, password } = req.body;

  const hardCodedEmail = 'test@test.com';
  const hardCodedPassword = '1234';

  if (email && password && email === hardCodedEmail && password === hardCodedPassword) {
    req.session = { isLoggedIn: true };
    res.redirect('/');
    return;
  }

  res.status(400).send('Invalid email or password');
});

authRouter.get('/logout', auth, (req: Request, res: Response): void => {
  if (req.session && req.session.isLoggedIn) {
    req.session = undefined;
  }

  res.redirect('/');
});

export { authRouter };
