import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.session || !req.session.isLoggedIn) {
    res.status(403).send('Not permitted');
    return;
  }

  next();
};
