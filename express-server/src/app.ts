import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send(`
        <h1>Test</h1>
    `);
});

export { app };
