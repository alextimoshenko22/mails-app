const router = require('express').Router();
const { incomingMails, sentMails, mails, tabs } = require('./mock');
const { reply } = require('./utils');

router.get('/incoming', (req, res, next) => {
  reply(res, incomingMails);
});

router.get('/sent', (req, res, next) => {
  reply(res, sentMails);
});

router.get('/mails', (req, res, next) => {
  reply(res, mails);
});

router.get('/tabs', (req, res, next) => {
  reply(res, tabs);
});

module.exports = router;
