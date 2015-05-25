'use strict';

var Hotel = require('../../../models/hotel');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/hotels',
    config: {
      description: 'get a list of hotels',
      handler: function(request, reply){
        Hotel.find(request.params._id, function(err, hotel){
          if(err){ return reply().code(400); }
          console.log('!!!!!!!!!!!!!!!!!', hotel);
          return reply(hotel).code(200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'hotels.index'
};
