import express from 'express';
import { PORT } from './config/env.js'; // @Copilot: what is the problem here ?


const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my subscribtion tracker api');
});

app.listen(PORT, ()=> {
  console.log(`server is running on port : ${PORT} on http://localhost:${PORT}`);
});

export default app;
