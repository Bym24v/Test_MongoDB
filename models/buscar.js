var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config');

var findRestaurants = function(db, callback) {
    
   var cursor =db.collection('test').find( );
    
   cursor.each(function(err, doc) {
       
      assert.equal(err, null);
       
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
       
   });
};


var Buscar = {
    
    init: function(){
        
        MongoClient.connect(config.url, function(err, db) {
            
          assert.equal(null, err);
            
          findRestaurants(db, function() {
              db.close();
          });
            
        });
    }
}
module.exports = Buscar;