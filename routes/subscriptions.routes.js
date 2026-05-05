import { Router } from 'express';

const subscribtionRouter = Router();

subscribtionRouter.get('/', (req, res) => {
  res.send({title : 'GET all Subscription'});
});


subscribtionRouter.get('/:id', (req, res) => {
  res.send({title : 'GET Subscription details'});
});


subscribtionRouter.post('/', (req, res) => {
  res.send({title : 'Create a Subscription'});
});


subscribtionRouter.put('/:id', (req, res) => {
  res.send({title : 'Update a Subscription'});
});


subscribtionRouter.delete('/:id', (req, res) => {
  res.send({title : 'DELETE a Subscription'});
});


subscribtionRouter.get('/user/:id', (req, res) => {
  res.send({title : 'GET all user Subscriptions'});
});

subscribtionRouter.put('/:id/cancel', (req, res) => {
  res.send({title : 'Cancel Subscriptions'});
});


subscribtionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({title : 'GET upcoming renewals Subscriptions'});
});




export default subscribtionRouter;
