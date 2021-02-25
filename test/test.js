var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with updated for demo', function(done) {
    request(app).get('/').expect('updated for demo', done);
  });
});
