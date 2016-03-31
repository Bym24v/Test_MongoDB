var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config');

var name = "Manuel";

var borrarPlayer = function(db, callback) {
  
   db.collection('test').deleteMany(
      { "player.name": name },
      function(err, results) {
         console.log("Borrado con Exito!!");
         //console.log(results);
         callback();
      }
   );
};


var Borrar = {
  
  init: function(){
    
    MongoClient.connect(config.url, function(err, db) {
      
      assert.equal(null, err);

      borrarPlayer(db, function() {
          db.close();
      });
    });
  }
}
module.exports = Borrar;