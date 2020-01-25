'use strict';


var mongoose = require('mongoose'),
  Verify = mongoose.model('Verify');

exports.list_all_verifications = function(req, res) {
  Verify.find({}, function(err, verify) {
    if (err)
      res.send(err);
      res.json(verify);
  });
};

exports.create_a_verify_entry = function(req, res) {
  var new_verification = new Verify(req.body);
  new_verification.save(function(err, verify) {
    if (err)
      res.send(err);
      res.json(verify);
  });
};

exports.update_a_verify_entry = function(req, res) {
  Verify.findOneAndUpdate({_id: req.params.verificationId}, req.body, {new: true}, function(err, verify) {
    if (err)
      res.send(err);
      res.json(verify);
  });
};



exports.read_a_verify_entry_by_video_id_and_crowd_entry_id_and_contributor = function(req, res) {
  console.log("finding a verification");
  console.log(req.params);
  Verify.find({"videoId":{$eq:req.params.videoId},"crowdEntryId":{$eq:req.params.crowdEntryId},"contributor":{$eq:req.params.contributor}}, function(err, verify) {
    if (err)
      res.send(err);
    res.json(verify);
  });
};



