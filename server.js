var static = require('node-static');


var file = new static.Server('./public');



require('http').createServer(function(request, response){
    
    request.addListener('end', function(){
        
        file.serve(request, response);
    }).resume();
    
}).listen(8000);



var mongo = require('./models/guardar');

mongo.init();




console.log('Servidor corriendo en el puerto --> 8000');