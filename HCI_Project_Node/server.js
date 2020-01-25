var cors = require('cors');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Video = require('./api/models/videoListModel'), //created model loading here
  bodyParser = require('body-parser'),
  crowd = require('./api/models/crowdEntryModel'),
  Verify = require('./api/models/verifyModel'),
  User = require('./api/models/userModel'),
  Question = require('./api/models/questionModel'),
  Answer = require('./api/models/answerModel'),
  LearnerSourceQuestion = require('./api/models/learnerSourceQuestionModel');
  LearnerSourceAnswer = require('./api/models/learnerSourceAnswerModel');
  AnswerSummary = require('./api/models/answerSummaryModel'),

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/VideoDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 



var routes = require('./api/routes/videoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) { //for undefined urls
  res.status(404).send({url: req.originalUrl + ' not found'})
});



app.listen(port);


console.log('video list RESTful API server started on: ' + port);

