'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LearnerSourceQuestionSchema = new Schema({
  video_id: {
    type: String,
    required: 'Kindly enter the video_id'
  },
  question: {
    type: String,
    required: 'Kindly enter the question'
  },
  time: {
    type: Number,
    required: 'Kindly enter the time'
  },
  flag: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('LearnerSourceQuestion', LearnerSourceQuestionSchema);