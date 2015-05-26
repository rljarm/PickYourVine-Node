'use strict';

var Vineyard = require('../../../models/vineyard');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/vineyards/geosearch/{x}/{y}/{dist}',
    config: {
      description: 'get a list of Vineyards in a region',
      handler: function(request, reply){
        var x = request.params.x;
        var y = request.params.y;
        console.log('loc!!!!!!!!!!!!!', x, y);
        var dist = request.params.dist;
        console.log('dist@#$@$@#@$42', dist);
        Vineyard.find({geo: {$geoWithin: {
  $centerSphere:
    [[x, y], dist / 3963.2]
}}}, function(err, vineyard){
          console.log('!!!!!', vineyard, err);
          if(err){ return reply().code(400); }
          return reply(vineyard).code(200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.geosearch'
};
