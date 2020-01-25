'use strict';


var mongoose = require('mongoose'),
  AnswerSummary = mongoose.model('AnswerSummary');

exports.list_all_answer_summaries = function(req, res) {
  AnswerSummary.find({}, function(err, answer_summary) {
    if (err)
      res.send(err);
    res.json(answer_summary);
  });
};

exports.create_a_answer_summary = function(req, res) {
  var new_answer_summary = new AnswerSummary(req.body);
  new_answer_summary.save(function(err, answer_summary) {
    if (err)
      res.send(err);
    res.json(answer_summary);
  });
};

