//mongo_connect

var MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

console.log("LOL module loaded!");

function LOLDAO(database) {

   "use strict";

   this.db = database;

   this.get_lol = function (frame_search, impression_search, callback) {
       "use strict";
       this.db.collection("lol").find({ "reference.frame": frame_search, "reference.impression": impression_search })
           .sort({ "date": -1 }) //newest first
           .toArray(function (err, links) {
               assert.equal(null, err);
               callback(links);
           });
   }

   this.search_links = function (query, callback) {
       "use strict";
       this.db.collection("lol").find({ $text: { $search: query}})
           .toArray(function (err, links) {
               assert.equal(null, err);
               callback(links);
           });
   }

}

module.exports.LOLDAO = LOLDAO;
