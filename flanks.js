//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("Flanks module loaded!");

function FlanksDAO(database) {

    "use strict";

    this.db = database;


    this.get_number_of_questions = function (callback) { //gets number of questions in questions collections
        "use strict";
        var number_of_questions = 0;
        //update this callback to get just the questions actually referenced in the user responses -- pass in user responses
        this.db.collection("question").find({})
            .toArray(function (err, quest) {
                assert.equal(null, err);
                callback(quest.length);
            });
    };

    this.get_permutations_table = function (number_of_questions, callback) { //builds permutations table
        "use strict";
        var permutations_table = [];
        //build permutations table
        callback(permutations_table);
    };


}

module.exports.FlanksDAO = FlanksDAO;
