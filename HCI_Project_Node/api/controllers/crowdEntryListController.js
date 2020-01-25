'use strict';

var mongoose = require('mongoose'),
  Crowd = mongoose.model('Crowd');

exports.list_all_crowd_entries = function(req, res) {
  Crowd.find({}, function(err, crowd) {
    if (err)
      res.send(err);
    res.json(crowd);
  });
};

exports.create_a_crowd_entry = function(req, res) {
  var new_crowd = new Crowd(req.body);
  new_crowd.save(function(err, crowd) {
    if (err)
      res.send(err);
    res.json(crowd);
  });
};


exports.list_all_crowd_entries_of_a_video = function(req, res) {
  console.log("finding a video");
  console.log(req.params);
  Crowd.find({"videoId":{$eq:req.params.videoId}} , function(err, crowd) {
    if (err)
      res.send(err);
      res.json(crowd);
  });
};
