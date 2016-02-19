'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  descricao: String,
  cidade: {
  	type: String,
  	default: 'lorena'
  },
  lat: String,
  lng: String,
  rua: String,
  user: {type: String, ref: 'User'},
  created: { type: Date, default: Date.now },
  foto: String
});

export default mongoose.model('Thing', ThingSchema);
