'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user_entry = function(req, res) {
  User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
      res.json(user);
  });
};


exports.get_a_user_by_user_id = function(req, res) {
  console.log("finding a user");
  console.log(req.params);
  User.find({"_id":{$eq:req.params.user_id}}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_users_by_status = function(req, res) {
  console.log("finding users");
  console.log(req.params);
  User.find({creation_status:{$eq:req.params.status}}, function(err, user) {
    if (err)
      res.send(err);
      res.json(user);
  });
};
