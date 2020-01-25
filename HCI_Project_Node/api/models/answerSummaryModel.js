'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnswerSummarySchema = new Schema({
  video_id: {
    type: String
  },
  type: {
    type: String,  
    required: 'Kindly enter the type(Quant/Qual/NASATLX/Final) of question'
  },
  condition: {
    type: String,
    required: 'Kindly enter the condition(vidSplit/learnerSource) of question'
  },
  question_type: {
    type: String,
    required: 'Kindly enter the question_type(MCQ/Likert/Descriptive/NASATLX_SUMMARY) of question'
  },
  question: {
    type: String,
     default: ''
  },
  accuracy: {
    type: Number,
    required: 'Kindly enter the answer(accuracy/NASATLX_WEIGHTED_VALUE)'
  },
  text_answer: {
    type: String,
  },
  total_time_taken_to_answer: {
    type: Number,
    required: 'Kindly enter the time in seconds'
  },
  total_time_taken_in_video: {
    type: Number
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

module.exports = mongoose.model('AnswerSummary', AnswerSummarySchema);
