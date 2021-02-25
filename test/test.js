var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with updated app', function(done) {
    request(app).get('/').expect('updated app', done);
  });
});
