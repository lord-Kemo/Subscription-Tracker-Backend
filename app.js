import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/user.routes.js';
import subscribtionRouter from './routes/subscriptions.routes.js';
import connectToDataBase from './Database/mongodb.js';



const app = express();

// api/v1/auth/sign-up
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subsrciptions', subscribtionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my subscribtion tracker api');
});

app.listen(PORT, async () => {
  console.log(`server is running on port : ${PORT} on http://localhost:${PORT}`);
  await connectToDataBase();
});

export default app;
