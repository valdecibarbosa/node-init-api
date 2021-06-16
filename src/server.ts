import express from 'express';
import '@controllers/UsersController';

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (request: express.Request, response: express.Response) => {
  const teste = 'Valdeci Barbosa';
  console.log(teste);
  return response.json({ message: 'Hello World teste' });
});

app.listen(PORT, HOST);
