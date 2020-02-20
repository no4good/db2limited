const { Router } = require('express');
const messagesService = require('../services/messages.service');

const router = Router();

router
  .get('/list/:n', (req, res, next) => messagesService
    .getMessageList(req.params.n)
    .then((data) => res.send(data))
    .catch(next))
  .get('/single/:id', (req, res, next) => messagesService
    .getMessageById(req.params.id)
    .then((data) => res.send(data))
    .catch(next))
  .post('/', (req, res, next) => messagesService
    .createMessage(req.body)
    .then((data) => res.send(data))
    .catch(next));

module.exports = router;
