'use strict';
module.exports = function(app) {
  var videoList = require('../controllers/videoListController');
  var crowdEntryList = require('../controllers/crowdEntryListController');
  var verifyList = require('../controllers/verifyEntryListController');
  var userList = require('../controllers/userController');
  var questionList = require('../controllers/questionController');
  var answerList = require('../controllers/answerController');
  var learnerSourcQuestionList = require('../controllers/learnerSourceQuestionController');
  var learnerSourcAnswerList = require('../controllers/learnerSourceAnswerController');
  var answerSummaryList = require('../controllers/answerSummaryController');

  // todoList Routes
  app.route('/videos')
    .get(videoList.list_all_videos)
    .post(videoList.create_a_video); //do later


  app.route('/videos/:videoId')
    .get(videoList.read_a_video);
   // .put(videoList.update_a_video) //do later
    //.delete(videoList.delete_a_video); //do later

  app.route('/crowdEntries')
    .get(crowdEntryList.list_all_crowd_entries)
    .post(crowdEntryList.create_a_crowd_entry); //do later


  app.route('/getcrowdEntriesOfAVideo/:videoId')
    .get(crowdEntryList.list_all_crowd_entries_of_a_video);
    

  app.route('/verifications')
    .get(verifyList.list_all_verifications)
    .post(verifyList.create_a_verify_entry);

  app.route('/verifications/:verificationId')
    .put(verifyList.update_a_verify_entry);
    
  app.route('/verifications/:videoId/:crowdEntryId/:contributor')
    .get(verifyList.read_a_verify_entry_by_video_id_and_crowd_entry_id_and_contributor); 

  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);

app.route('/users/:user_id')
    .get(userList.get_a_user_by_user_id)
    .put(userList.update_a_user_entry);

app.route('/user_by_status/:status')
    .get(userList.get_users_by_status);


  app.route('/questions')
    .get(questionList.list_all_questions)
    .post(questionList.create_a_question);

  app.route('/questions/:video_id/:condition')
    .get(questionList.list_all_questions_of_a_video_by_condition);

  app.route('/questions/:video_id/:condition/:type')
    .get(questionList.list_all_questions_of_a_video_by_condition_and_type);

  app.route('/answers')
    .get(answerList.list_all_answers)
    .post(answerList.create_a_answer);

  app.route('/answer_summaries')
    .get(answerSummaryList.list_all_answer_summaries)
    .post(answerSummaryList.create_a_answer_summary);

  app.route('/learnerSourceQuestions')
    .get(learnerSourcQuestionList.list_all_learner_source_questions)
    .post(learnerSourcQuestionList.create_a_learner_source_question);
    
  app.route('/getLearnerSourceQuestionsOfAVideo/:videoId')
    .get(learnerSourcQuestionList.list_all_learner_source_questions_of_a_video);

  app.route('/learnerSourceAnswers')
    .get(learnerSourcAnswerList.list_all_learner_source_answers)
    .post(learnerSourcAnswerList.create_a_learner_source_answer);

  app.route('/learnerSourceAnswers/:video_id/:learner_source_question_id/:contributor')
    .get(learnerSourcAnswerList.read_a_learner_source_answer_entry_by_video_id_and_learner_source_question_id_and_contributor); 

  app.route('/learnerSourceAnswers/:learner_source_answer_id')
    .put(learnerSourcAnswerList.update_a_learner_source_answer_entry);
    
  app.route('/getLearnerSourceAnswersOfAVideo/:videoId')
    .get(learnerSourcAnswerList.list_all_learner_source_answers_of_a_video);
};
