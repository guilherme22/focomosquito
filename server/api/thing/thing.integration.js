'use strict';

var app = require('../..');
import request from 'supertest';

var newThing;

describe('Thing API:', function() {

  describe('GET /api/things', function() {
    var things;

    beforeEach(function(done) {
      request(app)
        .get('/api/things')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      things.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/things', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/things')
        .send({
           "descricao" : "novo foco",
           "lat" : "-22.7392003",
           "lng" : "-45.10553779999998",
           "rua" : "Rua Lorena",
           "user" : "56c25b3e6af0e61c0813c589",
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newThing = res.body;
          done();
        });
    });

    it('should respond with the newly created thing', function() {
      newThing.descricao.should.equal('novo foco');
      newThing.rua.should.equal('Rua Lorena');
    });

  });

  describe('GET /api/things/:id', function() {
    var thing;

    beforeEach(function(done) {
      request(app)
        .get('/api/things/' + newThing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          thing = res.body;
          done();
        });
    });

    afterEach(function() {
      thing = {};
    });

    it('should respond with the requested thing', function() {
      newThing.descricao.should.equal('novo foco');
      newThing.rua.should.equal('Rua Lorena');
    });

  });

  describe('PUT /api/things/:id', function() {
    var updatedThing;

    beforeEach(function(done) {
      request(app)
        .put('/api/things/' + newThing._id)
        .send({
           "descricao" : "updated foco",
           "lat" : "-22.7392003",
           "lng" : "-45.10553779999998",
           "rua" : "Rua Lorena updated",
           "user" : "56c25b3e6af0e61c0813c589",
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedThing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedThing = {};
    });

    it('should respond with the updated thing', function() {
      updatedThing.descricao.should.equal('updated foco');
      updatedThing.rua.should.equal('Rua Lorena updated');
    });

  });

  describe('DELETE /api/things/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when thing does not exist', function(done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
