'use strict';

var Joi = require('joi');
var Vineyard = require('../../../models/vineyard');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/vineyards/{vineyardId}',
    config: {
      auth: false,
      validate: {
        params: {
          vineyardId: Joi.string().hex().length(24).required()
        }
      },
      description: 'get a single vineyard',
      handler: function(request, reply){
        Vineyard.findOne({_id: request.params.vineyardId}, function(err, vineyard){
          if(err){return reply().code(400); }
          return reply(vineyard);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.show'
};
