'use strict';


var mongoose = require('mongoose'),
  Question = mongoose.model('Question');

exports.list_all_questions = function(req, res) {
  Question.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.create_a_question = function(req, res) {
  var new_question = new Question(req.body);
  new_question.save(function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};


exports.list_all_questions_of_a_video_by_condition = function(req, res) {
  console.log("finding questions of a video by condition");
  console.log(req.params);
  Question.find({"video_id":{$eq:req.params.video_id},"condition":{$eq:req.params.condition}} , function(err, question) {
    if (err)
      res.send(err);
      res.json(question);
  });
};



exports.list_all_questions_of_a_video_by_condition_and_type = function(req, res) {
  console.log("finding questions of a video by condition");
  console.log(req.params);
  Question.find({"video_id":{$eq:req.params.video_id},"condition":{$eq:req.params.condition},"type":{$eq:req.params.type}} , function(err, question) {
    if (err)
      res.send(err);
      res.json(question);
  });
};
