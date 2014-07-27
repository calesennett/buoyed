var express = require('express');
var router = express.Router();
var Message = require('../lib/models/message');

/* GET users listing. */
router.get('/', Message.index);
router.get('/api/all', Message.all);
router.get('/new', Message.new);
router.get('/api/newest', Message.newest);
router.post('/messages', Message.create);

module.exports = router;
