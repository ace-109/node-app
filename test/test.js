var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with update for demo', function(done) {
    request(app).get('/').expect('update for demo', done);
  });
});
