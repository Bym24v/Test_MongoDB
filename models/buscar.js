var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config');

var buscarJugador = function(db, callback) {
    
   var cursor =db.collection('test').find( {"player.name": "Manuel"});
    
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
            
          buscarJugador(db, function() {
              db.close();
          });
            
        });
    }
}
module.exports = Buscar;