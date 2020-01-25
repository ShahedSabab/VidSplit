'use strict';

var mongoose = require('mongoose'),
  LearnerSourceAnswer = mongoose.model('LearnerSourceAnswer');

exports.list_all_learner_source_answers = function(req, res) {
  LearnerSourceAnswer.find({}, function(err, learnerSourceAnswer) {
    if (err)
      res.send(err);
    res.json(learnerSourceAnswer);
  });
};

exports.create_a_learner_source_answer = function(req, res) {
  var new_learnerSourceAnswer = new LearnerSourceAnswer(req.body);
  new_learnerSourceAnswer.save(function(err, learnerSourceAnswer) {
    if (err)
      res.send(err);
    res.json(learnerSourceAnswer);
  });
};


exports.update_a_learner_source_answer_entry = function(req, res) {
  LearnerSourceAnswer.findOneAndUpdate({_id: req.params.learner_source_answer_id}, req.body, {new: true}, function(err, learnerSourceAnswer) {
    if (err)
      res.send(err);
      res.json(learnerSourceAnswer);
  });
};


exports.read_a_learner_source_answer_entry_by_video_id_and_learner_source_question_id_and_contributor = function(req, res) {
  console.log("finding a learnerSourceAnswer");
  console.log(req.params);
  LearnerSourceAnswer.find({"video_id":{$eq:req.params.video_id},"question_id":{$eq:req.params.learner_source_question_id},"contributor":{$eq:req.params.contributor}}, function(err, learnerSourceAnswer) {
    if (err)
      res.send(err);
    res.json(learnerSourceAnswer);
  });
};


exports.list_all_learner_source_answers_of_a_video = function(req, res) {
  console.log("finding learnerSourceQuestions of a video");
  console.log(req.params);
  LearnerSourceAnswer.find({"videoId":{$eq:req.params.videoId}} , function(err, learnerSourceAnswer) {
    if (err)
      res.send(err);
      res.json(learnerSourceAnswer);
  });
};
