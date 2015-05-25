/* eslint no-reserved-keys: 0 */

'use strict';

var Mongoose = require('mongoose');
var Hotel;

var hotelSchema = Mongoose.Schema({
  name: {type: String, required: true},
  region: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String},
  state: {type: String, required: true},
  zip: {type: Number},
  phone: {type: String, required: true},
  geo: {type: [Number], index: '2d'},
  addrString: {type: String, required: true},
  website: {type: String},
  createdAt: {type: Date, required: true, default: Date.now}
});

Hotel = Mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
