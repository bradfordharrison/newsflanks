//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("Users module loaded!");

function UserDAO(database) {

    "use strict";

    this.db = database;

    this.get_usercode_for_update = function (callback) {
        "use strict";
        var col = this.db.collection('usercode');
        this.db.collection('usercode').find({ "_id": 1 })
            .toArray(function (err, code) {
                col.updateOne({ _id: 1 }, { $inc: { counter: 1 } });
                assert.equal(null, err);
                callback(code[0].counter);
            });
    };

    this.write_new_userdata = function (user_code, current_quest, current_answer, callback) {
        "use strict";

        var userRec = {
            usercode: user_code,
            frame: current_quest.frame,
            impression: current_quest.impression,
            last_answered: new Date(),
            response: current_answer
        };

        this.db.collection("user_data").insertOne(userRec);
        callback(userRec);
    };

    this.check_unique_username = function (name_res_caps, callback) {
        var found = false;
        this.db.collection('user').find({ username: name_res_caps })
            .toArray(function (err, userRec) {
                assert.equal(null, err);
                if (userRec.length === 1) {
                    if (userRec[0].username === name_res_caps) found = true;
                }
                callback(found);
            });
    };

    this.write_new_user = function (name_res_caps, visitor_code, user_code, current_quest, current_answer, callback) {
        "use strict";

        var userRec = {
            username: name_res_caps,
            usercode: user_code,
            since: new Date(),
            active: new Date(),
            logged_in: 1,
            lol_state: visitor_code,
            challenge_exists: 0,
            next_challenge: 0,
            challenges_since_login: 0,
            current_question: current_quest._id,
            impressions_array: [{ "question": current_quest._id, "frame": current_quest.frame, "impression": current_quest.impression, "answer": current_answer, "date": new Date(), "wayin": 0 }],
            sequence: 0
        };

        if (current_answer === 0) {  // score answer
            this.db.collection("question").updateOne({ "_id": current_quest._id },
                { "$inc": { "yes": 1 } });
        }
        if (current_answer === 1) {  // score answer
            this.db.collection("question").updateOne({ "_id": current_quest._id },
                { "$inc": { "no": 1 } });
        }


        this.db.collection("user").insertOne(userRec);
        callback(userRec);
    };

    this.get_challenge_question = function (callback) {
        "use strict";

        this.db.collection("challenge").find().toArray(function (err, quest) {
            assert.equal(null, err);
            callback(quest);
        });
    };

    this.write_user_challenge = function (user_code, chal_res_0, chal_res_1, chal_res_2, chal_res_3, chal_res_4, chal_res_5, chal_res_6, chal_res_7, chal_res_8, chal_res_9, chal_res_10, chal_res_11, chal_res_12, chal_res_13, chal_res_14, callback) {
        "use strict";

        chal_res_0 = chal_res_0.toUpperCase();
        chal_res_1 = chal_res_1.toUpperCase();
        chal_res_2 = chal_res_2.toUpperCase();
        chal_res_3 = chal_res_3.toUpperCase();
        chal_res_4 = chal_res_4.toUpperCase();
        chal_res_5 = chal_res_5.toUpperCase();
        chal_res_6 = chal_res_6.toUpperCase();
        chal_res_7 = chal_res_7.toUpperCase();
        chal_res_8 = chal_res_8.toUpperCase();
        chal_res_9 = chal_res_9.toUpperCase();
        chal_res_10 = chal_res_10.toUpperCase();
        chal_res_11 = chal_res_11.toUpperCase();
        chal_res_12 = chal_res_12.toUpperCase();
        chal_res_13 = chal_res_13.toUpperCase();
        chal_res_14 = chal_res_14.toUpperCase();


        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 0, "answer": chal_res_0 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 1, "answer": chal_res_1 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 2, "answer": chal_res_2 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 3, "answer": chal_res_3 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 4, "answer": chal_res_4 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 5, "answer": chal_res_5 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 6, "answer": chal_res_6 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 7, "answer": chal_res_7 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 8, "answer": chal_res_8 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 9, "answer": chal_res_9 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 10, "answer": chal_res_10 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 11, "answer": chal_res_11 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 12, "answer": chal_res_12 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 13, "answer": chal_res_13 } } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$push": { "challenge": { "question": 14, "answer": chal_res_14 } } });

        callback(user_code);
    };

    this.get_userimps_array = function (visitor_code, callback) {
        "use strict";
        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, userimps_array) {
                assert.equal(null, err);
                callback(userimps_array);
            });
    };

    this.build_userimps_list = function (visitor_code, quest, callback) {
        "use strict";
        var imps_list_temp = [];
        var imps_list = [];
        var counter = 0;
        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, userimps_array) {
                assert.equal(null, err);
                for (var j = 0; j < userimps_array[0].impressions_array.length; j++) {
                    imps_list_temp[j] = userimps_array[0].impressions_array[j];
                }
                for (j = 0; j < imps_list_temp.length; j++) {
                    for (var i = 0; i < quest.length; i++) {
                        if (quest[i]._id.equals(imps_list_temp[j].question)) {
                            imps_list[counter++] = quest[i];
                        }
                    }
                }
                callback(imps_list);
            });
    };

    this.build_userresps_list = function (visitor_code, imps_list, callback) {
        "use strict";
        var resps_list = [];
        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, resps_array) {
                assert.equal(null, err);
                for (var i = 0; i < imps_list.length; i++) {
                    for (var j = 0; j < resps_array[0].impressions_array.length; j++) {
                        if (imps_list[i]._id.equals(resps_array[0].impressions_array[j].question)) {
                            resps_list[i] = resps_array[0].impressions_array[j].answer;
                        }
                    }
                }
                callback(resps_list);
            });
    };

    this.get_user_answer_to_question = function (visitor_code, quest, callback) {
        "use strict";
        var imps_list_temp = [];
        var imps_answer = -1;
        var counter = 0;

        //set current question first
        this.db.collection('user').updateOne({ "usercode": visitor_code }, //update current_question
            { "$set": { "current_question": quest } });


        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, userimps_array) {
                assert.equal(null, err);
                for (var j = 0; j < userimps_array[0].impressions_array.length; j++) {
                    imps_list_temp[j] = userimps_array[0].impressions_array[j];
                }
                for (j = 0; j < imps_list_temp.length; j++) {
                    if (quest.equals(imps_list_temp[j].question)) {
                        imps_answer = imps_list_temp[j].answer;
                    }
                }
                callback(imps_answer);
            });
    };

    this.get_user_answer_to_question_dont_set_current = function (visitor_code, quest, callback) {
        "use strict";
        var imps_list_temp = [];
        var imps_answer;
        var counter = 0;

        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, userimps_array) {
                assert.equal(null, err);
                for (var j = 0; j < userimps_array[0].impressions_array.length; j++) {
                    imps_list_temp[j] = userimps_array[0].impressions_array[j];
                }
                for (j = 0; j < imps_list_temp.length; j++) {
                    if (quest.equals(imps_list_temp[j].question)) {
                        imps_answer = imps_list_temp[j].answer;
                    }
                }
                callback(imps_answer);
            });
    };

    this.get_current_user_question = function (visitor_code, callback) {
        "use strict";
        this.db.collection("user").find({ "usercode": visitor_code })
            .toArray(function (err, current_quest) {
                assert.equal(null, err);
                callback(current_quest[0]);
            });
    };

   this.get_username_from_usercode = function (visitor_code, callback) {
       "use strict";
       this.db.collection("user").find({ "usercode": visitor_code })
           .toArray(function (err, user) {
               assert.equal(null, err);
               callback(user[0].username);
           });
   };

   this.check_if_question_of_day_already_in_impressions_array = function (visitor_code, quest, userimps_array, callback) {
       "use strict";
       var result = false;
       for (var i = 0; i < userimps_array[0].impressions_array.length; i++) {
           if (quest._id.equals(userimps_array[0].impressions_array[i].question)) { //== compares with call by reference so you have to use this
               result = true;
               break;
           }
       }
       callback(result);
   };

   this.update_current_question_with_actual_response = function (user_code, current_question, response, current_response, userimps_array, callback) {
       "use strict";
       var done = true;
       var userRec = {
           usercode: user_code,
           frame: current_question.frame,
           impression: current_question.impression,
           last_answered: new Date(), //night batch - consolidate multiple answers to same question by same user, don't update (search) while user online
           response: current_response
       };
       this.db.collection('user').updateOne({ "usercode": user_code }, //update current_question
           { "$set": { "current_question": current_question._id } });
       this.db.collection('user').updateOne({ "usercode": user_code }, //update lol_state
           { "$set": { "lol_state": current_response } }); //if user flipped will not show flipped, will show original answer state
       if (response === false) {
           this.db.collection("user").updateOne({ "usercode": user_code }, //update impressions_array as well
               { "$push": { "impressions_array": { "$each": [{ "question": current_question._id, "frame": current_question.frame, "impression": current_question.impression, "answer": current_response, "date": new Date(), "wayin": 0 }] } } });
           if (current_response === 0) {
               this.db.collection("question").updateOne({ "_id": current_question._id },
                   { "$inc": { "yes": 1 } });
           }
           if (current_response === 1) {
               this.db.collection("question").updateOne({ "_id": current_question._id },
                   { "$inc": { "no": 1 } });
           }
       }

       if (response === true) {
           for (var i = 0; i < userimps_array[0].impressions_array.length; i++) {
               if (current_question._id.equals(userimps_array[0].impressions_array[i].question)) { //== compares with call by reference so you have to use this
                   if (userimps_array[0].impressions_array[i].answer === 0) {
                       this.db.collection("question").updateOne({ "_id": current_question._id },
                           { "$inc": { "yes": -1 } });
                   }
                   if (userimps_array[0].impressions_array[i].answer === 1) {
                       this.db.collection("question").updateOne({ "_id": current_question._id },
                           { "$inc": { "no": -1 } });
                   }
                   if (current_response === 0) {
                       this.db.collection("question").updateOne({ "_id": current_question._id },
                           { "$inc": { "yes": 1 } });
                   }
                   if (current_response === 1) {
                       this.db.collection("question").updateOne({ "_id": current_question._id },
                           { "$inc": { "no": 1 } });
                   }
                   break;
               }
           }

           this.db.collection("user").updateOne({ "usercode": user_code, "impressions_array.question": current_question._id }, //update impressions_array as well
               { "$set": { "impressions_array.$.answer": current_response } });
       }
       this.db.collection("user_data").insertOne(userRec); //add new user_rec as well
       callback(done);
   };

   this.update_current_question = function (user_code, current_question, callback) {
       "use strict";
       var done = true;
       var userRec = {
           usercode: user_code,
           frame: current_question.frame,
           impression: current_question.impression,
           last_answered: new Date(), //night batch - consolidate multiple answers to same question by same user, don't update (search) while user online
           response: 3
       };
       this.db.collection('user').updateOne({ "usercode": user_code }, //update current_question
           { "$set": { "current_question": current_question._id } });
       this.db.collection("user").updateOne({ "usercode": user_code }, //update impressions_array as well
           { "$push": { "impressions_array": { "$each": [{ "question": current_question._id, "frame": current_question.frame, "impression": current_question.impression, "answer": 3, "date": new Date(), "wayin": 0 }] } } });
       this.db.collection("user_data").insertOne(userRec); //add new user_rec as well
       callback(done);
   };

    this.update_user_lol_state = function (user_code, state, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').updateOne({ usercode: user_code }, //update flip state
            { "$set": { "lol_state": state } });
        callback(done);
    };

    this.update_user_lol_state_and_vote_status = function (user_code, state, current_quest_id, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').updateOne({ usercode: user_code }, //update flip state
            { "$set": { "lol_state": state } });

        this.db.collection("user").updateOne({ "usercode": user_code, "impressions_array.question": current_quest_id }, //update impressions_array as well
            { "$set": { "impressions_array.$.answer": state } });

        callback(done);
    };

    this.get_user_lol_state = function (user_code, callback) {
        "use strict";
        this.db.collection('user').find({ usercode: user_code })
            .project({ "lol_state": 1, _id: 0 })
            .toArray(function (err, state) {
                assert.equal(null, err);
                callback(state[0]);
            });
    };


    this.check_valid_username = function (user_name, callback) {
        var found = false;
        this.db.collection('user').find({ username: user_name })
            .toArray(function (err, userRec) {
                assert.equal(null, err);
                if (userRec.length === 1) {
                    if (userRec[0].username === user_name) found = true;
                }
                callback(found);
            });
    };

    this.check_valid_usercode = function (user_code, callback) {
        var found = false;
        this.db.collection('user').find({ usercode: user_code })
            .toArray(function (err, userRec) {
                assert.equal(null, err);
                if (userRec.length === 1) {
                    if (userRec[0].usercode === user_code) found = true;
                }
                callback(found);
            });
    };

    this.check_challenge = function (user_code, callback) {
        "use strict";
        this.db.collection('user').find({ usercode: user_code })
            .toArray(function (err, challenge_array) {
                assert.equal(null, err);
                callback(challenge_array[0].challenge);
            });
    };

    this.set_next_challenge = function (user_code, index, callback) {
        "use strict";
        var set = true;
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$set": { "next_challenge": index } });
        callback(set);
    };

    this.get_next_challenge = function (user_code, callback) {
        "use strict";
        this.db.collection('user').find({ usercode: user_code })
            .toArray(function (err, next_challenge) {
                assert.equal(null, err);
                callback(next_challenge[0].next_challenge);
            });
    };

    this.set_challenge_questions_since_last_login = function (user_code, number, callback) {
        "use strict";
        var set = true;
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$set": { "challenges_since_login": number } });
        callback(set);
    };

    this.set_logged_in_to_logged_out = function (user_code, callback) {
        "use strict";
        var set = true;
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$set": { "logged_in": 0 } });
        callback(set);
    };

    this.get_challenge_questions_since_last_login = function (user_code, callback) {
        "use strict";
        this.db.collection('user').find({ usercode: user_code })
            .toArray(function (err, number) {
                assert.equal(null, err);
                callback(number[0].challenges_since_login);
            });
    };

    this.get_challenge = function (question_number, callback) {
        "use strict";
        this.db.collection('challenge').find({ _id: question_number })
            .toArray(function (err, questions) {
                assert.equal(null, err);
                callback(questions[0].question);
            });
    };

    this.check_challenge_exists = function (visitor_code, callback) {
        "use strict";
        var result = false;
        this.db.collection('user').find({ "usercode": visitor_code })
            .toArray(function (err, codes) {
                assert.equal(null, err);
                if (codes[0].challenge_exists === 1) {
                    result = true;
                }
                callback(result);
            });
    };

    this.write_challenge_exists = function (visitor_code, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').updateOne({ "usercode": visitor_code },
            { "$set": { "challenge_exists": 1 } });
        callback(done);
    };

    this.update_logged_in_state = function (user_code, state, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').updateOne({ usercode: user_code }, //update flip state
            { "$set": { "logged_in": state } });
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$set": { "active": new Date() } });
        callback(done);
    };

    this.add_to_imps_if_not_present = function (visitor_code, userimps_array, callback) {
        var found = false;
        for (var i = 0; i < userimps_array.impressions_array.length; i++) {
            if (userimps_array.current_question.equals(userimps_array.impressions_array[i].question)) { //== compares with call by reference so you have to use this
                found = true;
                break;
            }
        }
        if (found === false) {
            this.db.collection("user").updateOne({ "usercode": visitor_code }, //update impressions array
                { "$push": { "impressions_array": { "$each": [{ "question": userimps_array.current_question, "frame": userimps_array.frame, "impression": userimps_array.impression, "answer": 3, "date": new Date(), "wayin": 0 }] } } });

            found = true;
        }
        callback(found);
    };


    this.get_usercode = function (user_name, callback) { //already validated as good
        "use strict";
        this.db.collection('user').find({ username: user_name })
            .toArray(function (err, state) {
                assert.equal(null, err);
                callback(state[0].usercode);
            });
    };

    this.update_sequence_number = function (user_code, number, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').updateOne({ usercode: user_code },
            { "$set": { "sequence": number } });
        callback(true);
    };

    this.get_sequence_number = function (user_code, callback) {
        "use strict";
        var done = true;
        this.db.collection('user').find({ usercode: user_code })
            .toArray(function (err, user_data) {
                assert.equal(null, err);
            callback(user_data[0].sequence);
            });
    };

    this.get_user_responses = function (callback) {
        "use strict";
        var user_data_array = [];
        var user_data_codes_array = [];
        this.db.collection('user').find()
            .toArray(function (err, user_data) {
                assert.equal(null, err);
                for (var i = 0; i < user_data.length; i++) {
                    user_data_array[i] = user_data[i].impressions_array;
                    user_data_codes_array[i] = user_data[i].usercode;
                    }
                //console.log(user_data_array);
                //console.log(user_data_codes_array);
                callback(user_data_array, user_data_codes_array);
            });
    };
}

module.exports.UserDAO = UserDAO;
