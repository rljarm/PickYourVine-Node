'use strict';

var Hotel = require('../../../models/hotel');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/hotels/{hotelId}',
    config: {
      validate: {
        params: {
          hotelId: Joi.string().hex()
        }
      },
      description: 'Delete a Hotel',
      handler: function(request, reply){
        Hotel.findByIdAndRemove(request.params.hotelId, function(err, hotel){
          if(err){
            return reply().code(400);
          }
          return reply(hotel);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'hotels.delete'
};
