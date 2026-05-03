import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my subscribtion tracker api');
});

app.listen(3000, ()=> {
  console.log('server is running on port : 3000 on http://localhost:3000');
});

export default app;
