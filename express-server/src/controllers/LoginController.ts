import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}
