'use strict';

var Vineyard = require('../../../models/vineyard');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/vineyards',
    config: {
      description: 'Create a vineyard',
      handler: function(request, reply){
        if(request.auth.credentials._id){
          console.log('!!!!!', request.payload);
          var vineyard = new Vineyard(request.payload);
          vineyard.save(function(){
          return reply(vineyard);
        });
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'vineyards.create'
};
