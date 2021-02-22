var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with detected', function(done) {
    request(app).get('/').expect('detected', done);
  });
});
