'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  descricao: String,
  lat: String,
  lng: String,
  rua: String,
  user: {type: String, ref: 'User'}
});

export default mongoose.model('Thing', ThingSchema);
