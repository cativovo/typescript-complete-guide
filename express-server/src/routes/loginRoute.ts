import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: {
    email: string | undefined;
    password: string | undefined;
  };
}

const loginRouter = Router();

loginRouter.get('/login', (req: Request, res: Response): void => {
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

loginRouter.post('/login', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  const hardCodedEmail = 'test@email.com';
  const hardCodedPassword = '1234';

  if (email && password && email === hardCodedEmail && password === hardCodedPassword) {
    res.send('Logged in');
    res.redirect('/');
    return;
  }

  res.status(400).send('Invalid email or password');
});

export { loginRouter };
