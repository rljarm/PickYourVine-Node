/* eslint no-reserved-keys: 0 */

'use strict';

var Mongoose = require('mongoose');
var Vineyard;

var vineyardSchema = Mongoose.Schema({
  name: {type: String, required: true},
  region: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String},
  state: {type: String, required: true},
  zip: {type: Number},
  phone: {type: String},
  geo: {type: [Number], index: '2d'},
  addrString: {type: String, required: true},
  website: {type: String},
  tastingRoom: {type: Boolean},
  foodPairing: {type: Boolean},
  yearOpened: {type: String},
  flightCost: {type: String},
  wines: {type: Array},
  createdAt: {type: Date, required: true, default: Date.now}
});

Vineyard = Mongoose.model('Vineyard', vineyardSchema);
module.exports = Vineyard;
