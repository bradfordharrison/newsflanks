

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
            .sort({ "date": -1 }) //newest first
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


    this.get_completed_user_categories = function (visitor_code, user_responses, metaframes, callback) {
        "use strict";
        var results_array = [];
        var user_imps_list = [];
        var metaframe_array_holder = [];
        var questions_counter = 0;
        visitor_code = visitor_code - 10000;
        if ((visitor_code > -1) && (visitor_code < user_responses.length)) {
            user_imps_list = user_responses[visitor_code];
            this.db.collection('question').find()
                .toArray(function (err, quests) {
                    for (var i = 0; i < metaframes.length; i++) { //massive loop for length of metaframes collection
                        metaframe_array_holder[i] = metaframes[i].metaframes_array;
                        for (var j = 0; j < quests.length; j++) {
                            for (var k = 0; k < metaframe_array_holder[i].length; k++) {
                                if ((quests[j].frame) === (metaframe_array_holder[i][k].frame) && (quests[j].impression) === (metaframe_array_holder[i][k].impression)) {
                                    for (var l = 0; l < user_imps_list.length; l++) {
                                        if (quests[j]._id.equals(user_imps_list[l].question)) {
                                            questions_counter++;
                                        };
                                    };
                                };
                            };
                        };
                        if (questions_counter === metaframe_array_holder[i].length)
                            results_array.push(metaframes[i].metacode);
                        questions_counter = 0;
                    };
                    callback(results_array);
                });
        }
        else {
            console.log("user code out of range");
        };
    };

    this.get_users_with_categories = function (user_responses, user_responses_codes, metaframes, callback) {
        "use strict";
        var user_results_array = [];
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
                        hits = 0;

                        }
                    }
                user_results_array.push(results_array);
                results_array = [];
                }
                callback(user_results_array);
            });
    };

    this.get_users_with_same_categories = function (completed_user_cats, users_with_cats, user_responses_codes, callback) {
        "use strict";
        var results_array = [];
        var a = [];
        var b = [];
        for (var i = 0; i < users_with_cats.length; i++) {
            a = users_with_cats[i].toString;
            b = completed_user_cats.toString;
            if ((a === b) && (users_with_cats[i][0].length !== 0)) { 
                results_array.push(user_responses_codes[i]);
            }
        }
        callback(results_array);
    };

       this.get_users_with_overlapping_categories = function (completed_user_cats, users_with_cats, callback) {
            "use strict";
           var temp_results_array = [];
           var results_array = [];
           for (var i = 0; i < users_with_cats.length; i++) { // go through entire users_with_cats [i]
               for (var j = 0; j < completed_user_cats.length; j++) {  // for each user, go through completed_user_cats [j]
                   for (var k = 0; k < users_with_cats[i].length; k++) {
                       if (users_with_cats[i][k] === completed_user_cats[j]) {
                           temp_results_array.push(users_with_cats[i][k]);
                       }
                   }
               }
               results_array.push(temp_results_array);
               temp_results_array = [];
           }
           callback(results_array);
    };

    this.get_flanks = function (visitor_code, sequences, completed_user_cats, users_with_overlapping, user_responses, callback) {
        "use strict";
        var cats_in_flank = [];
        var percent_users_same_answers = [];
        var percent_users_opposite_answers = [];
        var percent_users_opposite_answers_noneg = [];
        var total_users = [];
        var total_same = [];
        var total_opposite = [];
        var index_holder = 0;
        var match = 0;
        var opposite_match = 0;
        var answers_given = 0;
        visitor_code = visitor_code - 10000;
        for (var o = 0; o < completed_user_cats.length; o++) {
            for (var p = 0; p < sequences.length; p++) {
                if (sequences[p].metacode === completed_user_cats[o]) {
                    cats_in_flank.push(sequences[p].name);
                }
                //seq_index_holder = completed_user_cats[o];
                //--seq_index_holder;
                total_users.push(0);
                total_same.push(0);
                total_opposite.push(0);
            };
        };
        this.db.collection('question').find()
            .toArray(function (err, quests) {
                for (var i = 0; i < completed_user_cats.length; i++) {
                    for (var j = 0; j < users_with_overlapping.length; j++) {
                        for (var k = 0; k < users_with_overlapping[j].length; k++) {
                                if (users_with_overlapping[j][k] === completed_user_cats[i]) {
                                    total_users[i] = total_users[i] + 1;
                                    for (var z = 0; z < sequences.length; z++) {
                                        if (sequences[z].metacode === completed_user_cats[i]) {
                                            index_holder = z;
                                        }
                                    }
                                    answers_given = sequences[index_holder].metaframes_array.length;
                                    for (var p = 0; p < sequences[index_holder].metaframes_array.length; p++) {
                                            for (var q = 0; q < quests.length; q++) {
                                                if ((quests[q].frame === sequences[index_holder].metaframes_array[p].frame) && (quests[q].impression === sequences[index_holder].metaframes_array[p].impression)) {
                                                    for (var y = 0; y < user_responses[visitor_code].length; y++) {
                                                        if ((quests[q]._id.equals(user_responses[visitor_code][y].question)) && ((user_responses[visitor_code][y].answer === 2) || (user_responses[visitor_code][y].answer === 3)))
                                                            answers_given = answers_given - 1;
                                                    };                          
                                                    for (var r = 0; r < user_responses[visitor_code].length; r++) {
                                                        if ((quests[q]._id.equals(user_responses[visitor_code][r].question)) && ((user_responses[visitor_code][r].answer === 0) || (user_responses[visitor_code][r].answer === 1))) {                           
                                                            for (var v = 0; v < user_responses[j].length; v++) {                                           
                                                                if ((quests[q]._id.equals(user_responses[j][v].question)) && (user_responses[j][v].answer === 0) && (user_responses[visitor_code][r].answer === 0)) {
                                                                    match = match + 1;
                                                                }
                                                                if ((quests[q]._id.equals(user_responses[j][v].question)) && (user_responses[j][v].answer === 1) && (user_responses[visitor_code][r].answer === 1)) {
                                                                    match = match + 1;
                                                                }
                                                            }
                                                            for (var s = 0; s < user_responses[j].length; s++) {
                                                                if ((quests[q]._id.equals(user_responses[j][s].question)) && (user_responses[j][s].answer === 0) && (user_responses[visitor_code][r].answer === 1)) {
                                                                    opposite_match = opposite_match + 1;
                                                                }
                                                                if ((quests[q]._id.equals(user_responses[j][s].question)) && (user_responses[j][s].answer === 1) && (user_responses[visitor_code][r].answer === 0)) {
                                                                    opposite_match = opposite_match + 1;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (answers_given === 0) {
                                            total_same[i] = 0;
                                            total_opposite[i] = 0;
                                        }
                                        if (answers_given === match) {
                                            total_same[i] = total_same[i] + 1;
                                        }
                                        else if (answers_given === opposite_match) {
                                            total_opposite[i] = total_opposite[i] + 1;
                                        }
                                    }
                                    match = 0;
                                    opposite_match = 0;
                                }
                        }
                    }
                for (var m = 0; m < completed_user_cats.length; m++) {
                    if (total_users[m] !== 0) {
                        percent_users_same_answers.push((total_same[m]) / (total_users[m]));
                        percent_users_opposite_answers.push((total_opposite[m]) / (total_users[m]));
                        percent_users_opposite_answers_noneg.push((total_opposite[m]) / (total_users[m]));
                    }
                };
                for (var n = 0; n < completed_user_cats.length; n++) {
                    percent_users_same_answers[n] = percent_users_same_answers[n] * 100;
                    percent_users_opposite_answers[n] = percent_users_opposite_answers[n] * 100;
                    percent_users_opposite_answers_noneg[n] = percent_users_opposite_answers[n];
                    percent_users_opposite_answers[n] = percent_users_opposite_answers[n] * -1;
                };
                callback(cats_in_flank, percent_users_same_answers, percent_users_opposite_answers, percent_users_opposite_answers_noneg);
            });
    };
}

module.exports.FlanksDAO = FlanksDAO;
