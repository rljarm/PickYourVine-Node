'use strict';

var Joi = require('joi');
var Hotel = require('../../../models/hotel');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/hotels/{hotelId}',
    config: {
      validate: {
        params: {
          hotelId: Joi.string().hex().length(24).required()
        }
      },
      description: 'get a single hotel',
      handler: function(request, reply){
        Hotel.findOne({_id: request.params.hotelId}, function(err, hotel){
          if(err){return reply().code(400); }
          return reply(hotel);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'hotels.show'
};
