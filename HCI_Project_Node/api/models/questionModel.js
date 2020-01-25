'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  video_id: {
    type: String
  },
  type: {
    type: String,  
    required: 'Kindly enter the type(Quant/Qual/NASATLX) of question'
  },
  condition: {
    type: String,
    required: 'Kindly enter the condition(vidSplit/LearnerSource/Final/BOTH) of question'
  },
  question_type: {
    type: String,
    required: 'Kindly enter the question_type(MCQ/Likert/Descriptive) of question'
  },
  question: {
    type: String,
    required: 'Kindly enter the question'
  },
  answer_options: {
    type: String
  },
  correct_answer: {
    type: String
  },
  users_answer: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['created', 'ongoing', 'completed']
    }],
    default: ['created']
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
