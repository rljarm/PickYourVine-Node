'use strict';

exports.get = function(){
  var env = process.env.NODE_ENV || 'development';

  var common = {
    NODE_ENV: env,
    FIREBASE_SECRET: process.env.FIREBASE_SECRET,
    FIREBASE_EXPIRE: 24
  };

  var environments = {
    development: {
      PORT: process.env.PORT || 8000,
      MONGO_URL: 'mongodb://heroku:jdMSVIdC4zo0b-BeG8CiBelYMOZapxsnzrtpSwT7Y3n1VY59R2yWqXX3O35b9iJUW7qBK67tyYGVnMzrNpSXVQ@candidate.13.mongolayer.com:11003,candidate.44.mongolayer.com:10602/app37290104'
    },
    test: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://localhost/PickYourVine-test',
      FIREBASE_EXPIRE: Infinity,
      FIREBASE_TOKEN: process.env.FIREBASE_TOKEN
    },
    production: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://heroku:jdMSVIdC4zo0b-BeG8CiBelYMOZapxsnzrtpSwT7Y3n1VY59R2yWqXX3O35b9iJUW7qBK67tyYGVnMzrNpSXVQ@candidate.13.mongolayer.com:11003,candidate.44.mongolayer.com:10602/app37290104'
    }
  };

  var environment = environments[env];

  Object.keys(common).forEach(function(key){
    if(!environment[key]){
      environment[key] = common[key];
    }
  });

  return environment;
};
