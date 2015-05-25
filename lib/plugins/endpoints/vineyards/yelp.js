'use strict';
var yelp = require('yelp').createClient({
  consumer_key: 'rtmnZO5Fl1AiMTJg2s2uoA',
  consumer_secret: '2BRUmevrTOxfFGAEnn1hIobtcZA',
  token: 'wbN2KyasuLy7w-k2tRB4hqTsh9lCaaWW',
  token_secret: 'B6q7u9eHA7fSgOxQPFP8JEmPfb0'
});
exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/vineyards/yelp/{address}/{name}',
    config: {
      description: 'Gets a yelp review',
      handler: function(request, reply){
        yelp.search({term: request.params.name, location: request.params.address}, function(error, data){
            console.log('ERROR!!!!!!!!!!!!!', error);
            if(error){ return reply().code(400); }
            console.log('DATA!!!!!!!!!!!', data);
            return reply(data);
          });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'vineyards.yelp'
};
