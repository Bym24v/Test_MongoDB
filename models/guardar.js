var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config');

var guardarJugador = function(db, callback) {
  
   db.collection('test').insertOne( {
      "player" : {
         "name" : "Manuel",
          "level" : "1480",
         "points" : "10075",
         "coord" : [ -73.9557413, 40.7720266 ]
      }
   }, function(err, result) {
     
    assert.equal(err, null);
    console.log("Guardado con Exito.");
     
    callback();
  });
};

var Guardar = {
    
    init: function(){
      
        MongoClient.connect(config.url, function(err, db) {
        
          assert.equal(null, err);
          
          guardarJugador(db, function() {
              db.close();
          });
          
        });
    }
    
}
module.exports = Guardar;