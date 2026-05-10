import { Router } from 'express';
import { getAllUsers, getUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';
const userRouter = Router();


userRouter.get('/', authorize, getAllUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', authorize, (req, res) => {
  res.send({title: 'CREATE a User'});
});

userRouter.put('/:id', authorize,  (req, res) => {
  res.send({title: 'UPDATE a User'});
});


userRouter.delete('/:id', authorize, (req, res) => {
  res.send({title: 'DELETE a User'});
});

export default userRouter;
