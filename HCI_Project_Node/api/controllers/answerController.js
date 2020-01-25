'use strict';


var mongoose = require('mongoose'),
  Answer = mongoose.model('Answer');

exports.list_all_answers = function(req, res) {
  Answer.find({}, function(err, answer) {
    if (err)
      res.send(err);
    res.json(answer);
  });
};

exports.create_a_answer = function(req, res) {
  var new_answer = new Answer(req.body);
  new_answer.save(function(err, answer) {
    if (err)
      res.send(err);
    res.json(answer);
  });
};

