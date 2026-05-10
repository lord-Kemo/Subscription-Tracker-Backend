import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({title : 'GET all Subscription'});
});


subscriptionRouter.get('/:id', (req, res) => {
  res.send({title : 'GET Subscription details'});
});


subscriptionRouter.post('/', (req, res) => {
  res.send({title : 'Create a Subscription'});
});


subscriptionRouter.put('/:id', (req, res) => {
  res.send({title : 'Update a Subscription'});
});


subscriptionRouter.delete('/:id', (req, res) => {
  res.send({title : 'DELETE a Subscription'});
});


subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({title : 'GET all user Subscriptions'});
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({title : 'Cancel Subscriptions'});
});


subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({title : 'GET upcoming renewals Subscriptions'});
});





export default subscriptionRouter;
