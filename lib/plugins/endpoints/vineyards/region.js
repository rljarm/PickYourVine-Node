'use strict';

var Vineyard = require('../../../models/vineyard');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/vineyards/region/{region}',
    config: {
      description: 'get a list of Vineyards in a region',
      handler: function(request, reply){
        Vineyard.find({region: request.params.region}, function(err, vineyard){
          if(err){ return reply().code(400); }
          console.log('!!!!!', vineyard);
          return reply(vineyard).code(200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.region'
};
