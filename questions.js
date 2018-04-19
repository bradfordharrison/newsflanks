
//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("Questions module loaded!");

function QuestionDAO(database) {

   "use strict";

   this.db = database;

   this.get_question = function (callback) { //get all questions
       "use strict";
       this.db.collection("question").find({})
           .sort({ "date": -1 }) //newest first
           .toArray(function (err, quest) {
           assert.equal(null, err);
           callback(quest);
       });
   }

   this.get_default_question = function (callback) { //just get the default question of the day
       "use strict";
       this.db.collection("question").find({})
           .sort({ "date": -1 }) //newest first
           .toArray(function (err, quest) {
               assert.equal(null, err);
               callback(quest[0]);
           });
   }

   this.get_user_question = function (_id, callback) {
       this.db.collection("question").find({ "_id": _id })
           .toArray(function (err, user_quest) {
               assert.equal(null, err);
               callback(user_quest[0]);
           });
   }

   this.cancel_existing_vote = function (quest, userimps_array, callback) { 
       "use strict";
       var result = false;
       for (var i = 0; i < userimps_array[0].impressions_array.length; i++) {
           if (quest._id.equals(userimps_array[0].impressions_array[i].question)) { //== compares with call by reference so you have to use this
               if ((userimps_array[0].impressions_array[i].answer) == 0) {
                   this.db.collection("question").updateOne({ "_id": quest._id },
                       { "$inc": { "yes": -1 } });
                           result = true;
                   };
               if ((userimps_array[0].impressions_array[i].answer) == 1) {
                   this.db.collection("question").updateOne({ "_id": quest._id },
                        { "$inc": { "no": -1 } });
                           result = true;
                   };
               break;
                   };
               };
        callback(result);
   }



   this.get_yes_votes = function (id, callback) {
       "use strict";
       this.db.collection('question').find({ "_id": id })
           .toArray(function (err, number) {
               assert.equal(null, err);
               callback(number[0].yes);
           });
   }

   this.get_no_votes = function (id, callback) {
       "use strict";
       this.db.collection('question').find({ "_id": id })
           .toArray(function (err, number) {
               assert.equal(null, err);
               callback(number[0].no);
           });
   }

   this.add_yes_vote = function (id, number, callback) {
       "use strict";
       var set = true;
       this.db.collection('question').updateOne({ "_id": id },
           { "$set": { "yes": number } });
               callback(set);
   }

   this.get_no_votes = function (id, callback) {
       "use strict";
       this.db.collection('question').find({ "_id": id })
           .toArray(function (err, number) {
               assert.equal(null, err);
               callback(number[0].no);
           });
   }

   this.add_no_vote = function (id, number, callback) {
       var result = true;
       this.db.collection('question').updateOne({ "_id": id },
           { "$set": { "no": number } });
       callback(result);
   }

}

//add get_front_questions

module.exports.QuestionDAO = QuestionDAO;
