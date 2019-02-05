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
                for (var i = 0; i < metaframes.length; i++) { //massive loop for length of metaframes collection
                    metaframe_array_holder[i] = metaframes[i].metaframes_array;
                    for (var j = 0; j < quests.length; j++) {
                        for (var k = 0; k < metaframe_array_holder[i].length; k++) {
                            if ((quests[j].frame) === (metaframe_array_holder[i][k].frame) && (quests[j].impression) === (metaframe_array_holder[i][k].impression)) {
                                questions_counter++;
                            if (questions_counter === metaframe_array_holder[i].length)
                                    results_array.push(metaframes[i].metacode);
                            }
                        }
                    }
                 questions_counter = 0;
                }
                callback(results_array);
            });
    };

    this.get_users_with_categories = function (user_responses, user_responses_codes, metaframes, callback) {
        "use strict";
        var user_results_array = [];
        //var temp_array = [];
        var hits = 0;
        var results_array = [];
        var metaframe_array_holder = [];
        this.db.collection('question').find()
            .toArray(function (err, quests) {
                for (var i = 0; i < user_responses.length; i++) {
                    for (var l = 0; l < metaframes.length; l++) { 
                    metaframe_array_holder[l] = metaframes[l].metaframes_array; //consecutively builds
                        for (var j = 0; j < quests.length; j++) {
                            for (var k = 0; k < metaframe_array_holder[l].length; k++) {
                                if (((quests[j].frame) === (metaframe_array_holder[l][k].frame)) && ((quests[j].impression) === (metaframe_array_holder[l][k].impression))) {
                                    for (var m = 0; m < user_responses[i].length; m++) {
                                        if (quests[j]._id.equals(user_responses[i][m].question)) {
                                        hits++;
                                        }
                                    }
                                }
                            }
                        }
                    if (hits === metaframe_array_holder[l].length) {
                        results_array.push(metaframes[l].metacode);
                            hits = 0;
                    }
                    else {
                            results_array.push([]); //push empty array because user has completed no sequences

                        }
                    }
                user_results_array.push(results_array);
                results_array = [];
                }
                callback(user_results_array);
            });
    };

}

module.exports.FlanksDAO = FlanksDAO;
