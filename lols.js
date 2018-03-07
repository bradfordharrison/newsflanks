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

   this.check_like_already_in_content_likes_array = function (visitor_code, links_res, callback) {
       var result = false;
       this.db.collection('lol').find({ "_id": links_res })
           .toArray(function (err, number) {
               if (number[0].content_likes_array.length > 0) {
                   for (var j = 0; j < number[0].content_likes_array.length; j++) {
                       if ((number[0].content_likes_array[j]) == visitor_code) result = true;
                   };
               }
               callback(result);
      });
   }

   this.check_dislike_already_in_content_dislikes_array = function (visitor_code, links_res, callback) {
      var result = false;
      this.db.collection('lol').find({ "_id": links_res })
          .toArray(function (err, number) {
              if (number[0].content_dislikes_array.length > 0) {
                  for (var j = 0; j < number[0].content_dislikes_array.length; j++) {
                      if ((number[0].content_dislikes_array[j]) == visitor_code) result = true;
                  };
              }
              callback(result);
          });
   }

   this.delete_dislike_already_in_content_dislikes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$pull": { "content_dislikes_array": visitor_code } });
       callback(result);
   }

   this.decrement_content_dislikes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "content_dislikes": -1 } });
       callback(result);
   }

   this.add_dislike_to_content_dislikes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$push": { "content_dislikes_array": visitor_code } });
       callback(result);
   }

   this.increment_content_dislikes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "content_dislikes": 1 } });
       callback(result);
   }

   this.delete_like_already_in_content_likes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res }, 
           { "$pull": { "content_likes_array": visitor_code } });
       callback(result);
   }

   this.decrement_content_likes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "content_likes": -1 } });
       callback(result);
   }

   this.check_dislike_already_in_flip_dislikes_array = function (visitor_code, links_res, callback) {
       var result = false;
       this.db.collection('lol').find({ "_id": links_res })
           .toArray(function (err, number) {
               if (number[0].flip_dislikes_array.length > 0) {
                   for (var j = 0; j < number[0].flip_dislikes_array.length; j++) {
                       if ((number[0].flip_dislikes_array[j]) == visitor_code) result = true;
                   };
               }
               callback(result);
           });
   }

   this.delete_dislike_already_in_flip_dislikes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$pull": { "flip_dislikes_array": visitor_code } });
       callback(result);
   }

   this.decrement_flip_dislikes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "flip_dislikes": -1 } });
       callback(result);
   }

   this.add_dislike_to_flip_dislikes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$push": { "flip_dislikes_array": visitor_code } });
       callback(result);
   }

   this.increment_flip_dislikes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "flip_dislikes": 1 } });
       callback(result);
   }

   this.check_like_already_in_flip_likes_array = function (visitor_code, links_res, callback) {
       var result = false;
       this.db.collection('lol').find({ "_id": links_res })
           .toArray(function (err, number) {
               if (number[0].flip_likes_array.length > 0) {
                   for (var j = 0; j < number[0].flip_likes_array.length; j++) {
                       if ((number[0].flip_likes_array[j]) == visitor_code) result = true;
                   };
               }
               callback(result);
           });
   }

   this.delete_like_already_in_flip_likes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$pull": { "flip_likes_array": visitor_code } });
       callback(result);
   }

   this.decrement_flip_likes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "flip_likes": -1 } });
       callback(result);
   }

   this.add_like_to_content_likes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$push": { "content_likes_array": visitor_code } });
       callback(result);
   }

   this.increment_content_likes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "content_likes": 1 } });
       callback(result)
   }

   this.add_like_to_flip_likes_array = function (visitor_code, links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$push": { "flip_likes_array": visitor_code } });
       callback(result);
   }

   this.increment_flip_likes = function (links_res, callback) {
       var result = true;
       this.db.collection("lol").updateOne({ "_id": links_res },
           { "$inc": { "flip_likes": 1 } });
       callback(result);
   }

}

module.exports.LOLDAO = LOLDAO;
