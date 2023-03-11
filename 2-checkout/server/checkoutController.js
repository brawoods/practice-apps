const express = require('express');
const model = require('./checkoutModel.js')

const router = express.Router();

router.put('/users', (req, res) => {
  // invoke user model
  console.log('user: ', req.body.user);
  model.putUser(req.body.user)
  .then((res) => res.sendStatus(201))
  .catch((err) => res.status(500).send(err))
})

router.put('/address', (req, res) => {
// invoke address model
console.log('user: ', req.body.address);
  model.putAddress(req.body.address)
  .then((res) => res.sendStatus(201))
  .catch((err) => res.status(500).send(err))
})

router.put('/creditCard', (req, res) => {
// invoke creditCard model
console.log('user: ', req.body.creditCard);
  model.putCredit(req.body.creditCard)
  .then((res) => res.sendStatus(201))
  .catch((err) => res.status(500).send(err))
})

module.exports = router;