import { Router } from 'express';

// Eto yung Singleton
// Para sure na isang instance lang ng Router yung ginagamit
export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}
