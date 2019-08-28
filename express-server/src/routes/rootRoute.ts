import { Router, Request, Response } from 'express';

const rootRouter = Router();

rootRouter.get('/', (req: Request, res: Response): void => {
  //   if (req.session && req.session.loggedIn) {
  //   }

  if (req.session && req.session.isLoggedIn) {
    res.send('Logged in');
    return;
  }

  res.redirect('/login');
});

export { rootRouter };
