//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("Flanks module loaded!");

function FlanksDAO(database) {

    "use strict";

    this.db = database;

    this.get_yes_table = function (callback) {
        "use strict";
        var built_yes_table = [];
        callback(built_yes_table);
    };

    
}

module.exports.FlanksDAO = FlanksDAO;
