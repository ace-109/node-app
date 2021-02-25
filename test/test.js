var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with updated2025', function(done) {
    request(app).get('/').expect('updated2025', done);
  });
});
