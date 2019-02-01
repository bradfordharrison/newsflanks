//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("Flanks module loaded!");

function FlanksDAO(database) {

    "use strict";

    this.db = database;


    this.get_categories = function (callback) { //gets number of questions in questions collections
        "use strict";
        //update this callback to get just the questions actually referenced in the user responses -- pass in user responses
        this.db.collection("metaframe").find({})
            .toArray(function (err, metaframes) {
                assert.equal(null, err);
                callback(metaframes);
            });
    };

//    this.get_permutations_table = function (callback) { //builds permutations table
//        "use strict";
//        this.db.collection("permutation").find({})
//            .toArray(function (err, permutations) {
//                assert.equal(null, err);
//                callback(permutations[0]);
//            });
//    };


    this.get_completed_user_categories = function (visitor_code, user_responses, user_responses_codes, metaframes, callback) {
        "use strict";
        var results_array = [];
        var user_imps_list = [];
        var metaframe_array_holder = [];
        var questions_counter = 0;
        for (var i = 0; i < user_responses_codes.length; i++) {
            if (visitor_code === user_responses_codes[i]) {
                user_imps_list = user_responses[i];
            }
        }
        this.db.collection('question').find()
            .toArray(function (err, quests) {
                for (i = 0; i < metaframes.length; i++) { //massive loop for length of metaframes collection
                    metaframe_array_holder[i] = metaframes[i].metaframes_array;
                    for (var j = 0; j < quests.length; j++) {
                        for (var k = 0; k < metaframe_array_holder[i].length; k++) {
                            if ((quests[j].frame) === (metaframe_array_holder[i][k].frame) && (quests[j].impression) === (metaframe_array_holder[i][k].impression)) {
                                questions_counter++;
                            if (questions_counter === metaframe_array_holder[i].length)
                                    results_array.push(metaframes[i].name);
                            }
                        }
                    }
                 questions_counter = 0;
                }
                callback(results_array);
            });
    };

}

module.exports.FlanksDAO = FlanksDAO;
