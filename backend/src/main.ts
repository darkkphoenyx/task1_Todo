import expesss, { Request, Response } from 'express';
const app = expesss();
const port = 3000;
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});