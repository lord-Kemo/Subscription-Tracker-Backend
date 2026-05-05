import { Router } from 'express';

const userRouter = Router();


userRouter.get('/', (req, res) => {
  res.send({title: 'Feth all Users'});
});

userRouter.get('/:id', (req, res) => {
  res.send({title: 'Feth a User'});
});

userRouter.post('/', (req, res) => {
  res.send({title: 'CREATE a User'});
});

userRouter.put('/:id', (req, res) => {
  res.send({title: 'UPDATE a User'});
});


userRouter.delete('/:id', (req, res) => {
  res.send({title: 'DELETE a User'});
});

export default userRouter;
