import { Router, Request, Response } from 'express';

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

loginRouter.post('/login', (req: Request, res: Response): void => {
  console.log(req.body);
});

export { loginRouter };
