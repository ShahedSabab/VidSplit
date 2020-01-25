'use strict';

var mongoose = require('mongoose'),
  LearnerSourceQuestion = mongoose.model('LearnerSourceQuestion');

exports.list_all_learner_source_questions = function(req, res) {
  LearnerSourceQuestion.find({}, function(err, learnerSourceQuestion) {
    if (err)
      res.send(err);
    res.json(learnerSourceQuestion);
  });
};

exports.create_a_learner_source_question = function(req, res) {
  var new_learnerSourceQuestion = new LearnerSourceQuestion(req.body);
  new_learnerSourceQuestion.save(function(err, learnerSourceQuestion) {
    if (err)
      res.send(err);
    res.json(learnerSourceQuestion);
  });
};


exports.list_all_learner_source_questions_of_a_video = function(req, res) {
  console.log("finding learnerSourceQuestions of a video");
  console.log(req.params);
  LearnerSourceQuestion.find({"video_id":{$eq:req.params.videoId}} , function(err, learnerSourceQuestion) {
    if (err)
      res.send(err);
      res.json(learnerSourceQuestion);
  });
};
