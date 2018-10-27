
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
    };

    this.get_default_question = function (callback) { //just get the default question of the day
        "use strict";
        this.db.collection("question").find({})
            .sort({ "date": -1 }) //newest first
            .toArray(function (err, quest) {
                assert.equal(null, err);
                callback(quest[0]);
            });
    };

    this.get_user_question = function (_id, callback) {
        this.db.collection("question").find({ "_id": _id })
            .toArray(function (err, user_quest) {
                assert.equal(null, err);
                callback(user_quest[0]);
            });
    };

    this.cancel_existing_vote = function (quest, userimps_array, callback) {
        "use strict";
        var result = false;
        for (var i = 0; i < userimps_array.impressions_array.length; i++) {
            if (quest._id.equals(userimps_array.impressions_array[i].question)) { //== compares with call by reference so you have to use this
                if ((userimps_array.impressions_array[i].answer) === 0) {
                    this.db.collection("question").updateOne({ "_id": quest._id },
                        { "$inc": { "yes": -1 } });
                    result = true;
                }
                if ((userimps_array.impressions_array[i].answer) === 1) {
                    this.db.collection("question").updateOne({ "_id": quest._id },
                        { "$inc": { "no": -1 } });
                    result = true;
                }
                break;
            }
        }
        callback(result);
    };


    this.get_yes_votes = function (id, callback) {
        "use strict";
        this.db.collection('question').find({ "_id": id })
            .toArray(function (err, number) {
                assert.equal(null, err);
                callback(number[0].yes);
            });
    };

    this.add_yes_vote = function (id, callback) {
        "use strict";
        var result = true;
        this.db.collection('question').updateOne({ "_id": id },
            { "$inc": { "yes": 1 } });
        callback(result);
    };

    this.get_no_votes = function (id, callback) {
        "use strict";
        this.db.collection('question').find({ "_id": id })
            .toArray(function (err, number) {
                assert.equal(null, err);
                callback(number[0].no);
            });
    };

    this.add_no_vote = function (id, callback) {
        var result = true;
        this.db.collection('question').updateOne({ "_id": id },
            { "$inc": { "no": 1 } });
        callback(result);
    };


    this.get_front_questions = function (callback) {
        "use strict";
        this.db.collection("frontquestion").find({})
            .sort({ "date": -1 }) //newest first
            .toArray(function (err, quest) {
                assert.equal(null, err);
                callback(quest);
            });
    };

    this.get_full_front_questions = function (quest, callback) {
        "use strict";
        var front_quest = [];
        var counter = 0;
        this.db.collection("question").find({})
            .toArray(function (err, all_quest) {
                assert.equal(null, err);
                for (var i = 0; i < quest.length; i++) {
                    for (var j = 0; j < all_quest.length; j++) {
                        if ((quest[i].frame === all_quest[j].frame) && (quest[i].impression === all_quest[j].impression)) {
                            front_quest[counter++] = all_quest[j];
                            break;
                        }
                    }
                }
                callback(front_quest);
            });
    };
}

module.exports.QuestionDAO = QuestionDAO;
