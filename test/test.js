var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with updated for demo final', function(done) {
    request(app).get('/').expect('updated for demo final', done);
  });
});
