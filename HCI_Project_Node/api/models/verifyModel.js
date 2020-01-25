'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VerifySchema = new Schema({
  videoId: {
    type: String
  },
  crowdEntryId: {
    type: String
  },
  positive: {
    type: Number,
    default: 0
  },
  negative: {
    type: Number,
    default: 0
  },
  neutral: {
    type: Number,
    default: 0
  },
  modifiedTime: {
    type: Number,
    default: -1
  },
  contributor: {
    type: String
  }
});

module.exports = mongoose.model('Verify', VerifySchema);