'use strict';

var Vineyard = require('../../../models/vineyard');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/vineyards/{vineyardlId}',
    config: {
      validate: {
        params: {
          hotelId: Joi.string().hex()
        }
      },
      description: 'Delete a Vineyard',
      handler: function(request, reply){
        Vineyard.findByIdAndRemove(request.params.vineyardId, function(err, vineyard){
          if(err){
            return reply().code(400);
          }
          return reply(vineyard);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.delete'
};
