'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LearnerSourceAnswerSchema = new Schema({
  video_id: {
    type: String
  },
  question_id: {
    type: String
  },
  answer: {
    type: String
  },
  contributor: {
    type: String
  }
});

module.exports = mongoose.model('LearnerSourceAnswer', LearnerSourceAnswerSchema);