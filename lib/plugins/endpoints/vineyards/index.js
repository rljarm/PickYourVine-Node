'use strict';

var Vineyard = require('../../../models/vineyard');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/vineyards',
    config: {
      description: 'get a list of Vineyards',
      handler: function(request, reply){
        Vineyard.find(request.params._id, function(err, vineyard){
          if(err){ return reply().code(400); }
          return reply(vineyard).code(200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.index'
};
