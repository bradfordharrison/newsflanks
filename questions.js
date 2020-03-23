
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

    this.get_sequence_questions = function (questions, metaframe_id, callback) { //get all sequence questions
        var quests_list_temp = [];
        var quests_list = [];
        var counter = 0;
        this.db.collection("metaframe").find({"metacode": metaframe_id})
            .toArray(function (err, metaframe_code) {
                assert.equal(null, err);
                for (var j = 0; j < metaframe_code[0].metaframes_array.length; j++) {
                    quests_list_temp[j] = metaframe_code[0].metaframes_array[j];
                }
                for (j = 0; j < quests_list_temp.length; j++) {
                    for (var i = 0; i < questions.length; i++) {
                        if (((questions[i].frame) === (quests_list_temp[j].frame)) && ((questions[i].impression) === (quests_list_temp[j].impression))) {
                            quests_list[counter++] = questions[i]._id;
                        }
                    }
                }
                callback(quests_list);
            });
    };


    this.get_categories = function (callback) { //get all categories
        "use strict";
        var sequences_questions_array = [];
        var next_available = 0;
        this.db.collection("metaframe").find({})
            .toArray(function (err, sequences) {
                assert.equal(null, err);
                for (var i = 0; i < sequences.length; i++) {
                    sequences_questions_array[next_available++] = { "api": sequences[i].api2, "metacode_frame": sequences[i].metacode, "name_question": sequences[i].name, "impression": 0, "url_text": "0" }; //impression and url_text are a hack
                    for (var j = 0; j < sequences[i].metaframes_array.length; j++) {
                        sequences_questions_array[j + next_available] = { "api": sequences[i].api, "metacode_frame": sequences[i].metaframes_array[j].frame, "name_question": sequences[i].metaframes_array[j].question, "impression": sequences[i].metaframes_array[j].impression, "url_text": sequences[i].metaframes_array[j].url_text  };
                    }
                    next_available = next_available + sequences[i].metaframes_array.length;
                }
                callback(sequences_questions_array);
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

    this.get_user_question = function (_id, callback) { //get question with _id
        this.db.collection("question").find({ "_id": _id })
            .toArray(function (err, user_quest) {
                assert.equal(null, err);
                callback(user_quest[0]);
            });
    };

    this.get_user_question2 = function (frame, impression, callback) { //get question with frame, impression
        this.db.collection("question").find({ "frame": frame, "impression": impression })
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
                if (number[0] != undefined)
                    callback(number[0].yes);
                else
                    callback(2);
            });
    };

    this.get_yes_visitor_votes = function (id, callback) {
        "use strict";
        this.db.collection('question').find({ "_id": id })
            .toArray(function (err, number) {
                assert.equal(null, err);
                callback(number[0].yes_visitor);
            });
    };

    this.add_yes_vote = function (id, callback) {
        "use strict";
        var result = true;
        this.db.collection('question').updateOne({ "_id": id },
            { "$inc": { "yes": 1 } });
        callback(result);
    };

    this.add_yes_vote2 = function (id, callback) {
        "use strict";
        this.db.collection('question').findOneAndUpdate(
            { "_id": id },
            { "$inc": { "yes_visitor": 1 } },
            {
                returnOriginal: false
            },
            function (err, result) {
                assert.equal(null, err);
                callback(result.value)
            });
    };

    this.subtract_yes_vote2 = function (id, callback) {
        "use strict";
        this.db.collection('question').findOneAndUpdate(
            { "_id": id },
            { "$inc": { "yes_visitor": -1 } },
            {
                returnOriginal: false
            },
            function (err, result) {
                assert.equal(null, err);
                callback(result.value)
            });
    };

    this.get_no_votes = function (id, callback) {
        "use strict";
        this.db.collection('question').find({ "_id": id })
            .toArray(function (err, number) {
                assert.equal(null, err);
                if (number[0] != undefined)
                    callback(number[0].no);
                else
                    callback(2);
            });
    };

    this.get_no_visitor_votes = function (id, callback) {
        "use strict";
        this.db.collection('question').find({ "_id": id })
            .toArray(function (err, number) {
                assert.equal(null, err);
                callback(number[0].no_visitor);
            });
    };

    this.add_no_vote = function (id, callback) {
        var result = true;
        this.db.collection('question').updateOne({ "_id": id },
            { "$inc": { "no": 1 } });
        callback(result);
    };

    this.add_no_vote2 = function (id, callback) {
        "use strict";
        this.db.collection('question').findOneAndUpdate(
            { "_id": id },
            { "$inc": { "no_visitor": 1 } },
            {
                returnOriginal: false
            },
            function (err, result) {
                assert.equal(null, err);
                callback(result.value)
            });
    };

    this.subtract_no_vote2 = function (id, callback) {
        "use strict";
        this.db.collection('question').findOneAndUpdate(
            { "_id": id },
            { "$inc": { "no_visitor": -1 } },
            {
                returnOriginal: false
            },
            function (err, result) {
                assert.equal(null, err);
                callback(result.value)
            });
    };

    this.check_valid_question = function (frame_in, impression_in, callback) {
        var found = false;
        this.db.collection('question').find({ frame: frame_in, impression: impression_in })
            .toArray(function (err, check_question) {
                assert.equal(null, err);
                if (check_question.length === 1) found = true;
                callback(found);
            });
    };

    this.check_valid_question2 = function (id_in, callback) {
        var found = false;
        this.db.collection('question').find({ "_id": id_in })
            .toArray(function (err, check_question) {
                assert.equal(null, err);
                if (check_question.length === 1) found = true;
                callback(found);
            });
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
