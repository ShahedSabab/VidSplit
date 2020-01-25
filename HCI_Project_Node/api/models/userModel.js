'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  age: {
    type: Number,
    required: 'Kindly enter the age of user'
  },
  sex: {
    type: String,
    required: 'Kindly enter the sex of user'
  },
  profession: {
    type: String,
    required: 'Kindly enter the profession of user'
  },
  macchinLearningKnowledgeLevel: {
    type: String
  },
  highestDegreeAchieved: {
    type: String
  },
  major: {
    type: String
  },
  video1:{
    type: String
  },
  condition1:{
    type: String
  },
  video2: {
    type: String
  },
  condition2:{
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  creation_status:{
    type: String,
    default: 'created'
  },
  status: {
    type: [{
      type: String,
      enum: ['created', 'ongoing', 'completed']
    }],
    default: ['created']
  }
});

module.exports = mongoose.model('User', UserSchema);
