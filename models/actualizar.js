var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config');


var actualizarJugador = function(db, callback) {
  
   db.collection('test').updateOne(
      { "player.name" : "Manuel" },
      {
        $set: { "player.level": 5000 },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
        
      console.log("Actualizado con exito!!")
      //console.log(results);
      callback();
   });
};

var Actualizar = {
  
  init: function(){
    
    MongoClient.connect(config.url, function(err, db) {
      
      assert.equal(null, err);

      actualizarJugador(db, function() {
          db.close();
      });
      
    });
  }
}
module.exports = Actualizar;