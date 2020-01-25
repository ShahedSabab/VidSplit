'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnswerSchema = new Schema({
  question_id: {
    type: String,
    required: 'Kindly enter the question_id'
  },
  video_id: {
    type: String
  },
  type: {
    type: String,  
    required: 'Kindly enter the type(Quant/Qual/NASATLX) of question'
  },
  condition: {
    type: String,
    required: 'Kindly enter the condition(vidSplit/learnerSource) of question'
  },
  question_type: {
    type: String,
    required: 'Kindly enter the question_type(MCQ/Likert/Descriptive) of question'
  },
  asnswer_options: {
    type: String
  },
  question: {
    type: String,
    required: 'Kindly enter the question'
  },
  answer: {
    type: String,
    required: 'Kindly enter the answer'
  },
  correct_answer: {
    type: String
  },
  user_id: {
    type: String,
    required: 'Kindly enter the user_id'
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

module.exports = mongoose.model('Answer', AnswerSchema);
