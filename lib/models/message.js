var http = require('http');
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var messageSchema = mongoose.Schema({
  body: String,
  upvotes: Number
});

messageSchema.plugin(timestamps);
var Message = module.exports = mongoose.model('Message', messageSchema);

module.exports.new = function(req, res) {
  res.render('messages/new');
}

module.exports.newest = function(req, res) {
  Message.find().sort({createdAt: -1}).exec(function(err, messages) {
    if (!err) {
      res.json(messages);
    }
  });
}

module.exports.index = function(req, res) {
  Message.find().sort({upvotes: -1}).exec(function(err, messages) {
    if (!err) {
      res.render('messages/index', {messages: messages, title: 'Buoyed | Keeping People Afloat'});
    }
  });
}

module.exports.create = function(req, res) {
  var post = new Message({body: req.body.message, upvotes: 2});
  post.save(function(err) {
    if (!err) {
      res.redirect('/');
    }
  });
}

module.exports.all = function(req, res) {
  Message.find().sort({upvotes: -1}).exec(function(err, messages) {
    if (!err) {
      res.json(messages);
    } else {
      req.flash('Error retrieving messages.');
      res.redirect('/');
    }
  });
};