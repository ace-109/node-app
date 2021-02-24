var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with update to the app', function(done) {
    request(app).get('/').expect('update to the app', done);
  });
});
