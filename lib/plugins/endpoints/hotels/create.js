'use strict';

var Hotel = require('../../../models/hotel');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/hotels',
    config: {
      description: 'Create a hotel',
      handler: function(request, reply){
        if(request.auth.credentials._id){
          var hotel = new Hotel(request.payload);
          hotel.save(function(){
          return reply(hotel);
        });
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'hotels.create'
};
