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

    this.get_permutations_table = function (callback) { //builds permutations table
        "use strict";
        this.db.collection("permutation").find({})
            .toArray(function (err, permutations) {
                assert.equal(null, err);
                callback(permutations[0]);
            });
    };



}

module.exports.FlanksDAO = FlanksDAO;
