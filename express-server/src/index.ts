import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`running on port ${PORT}`);
});
