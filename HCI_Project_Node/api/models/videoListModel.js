'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VideoSchema = new Schema({
  id: {
    type: String,
    required: 'Kindly enter the id of the video'
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the video'
  },
  url: {
    type: String,
    required: 'Kindly enter the url of the video'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Video', VideoSchema);
