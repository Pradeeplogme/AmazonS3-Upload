var request = require('supertest'),
    app = require('../server');

require('../lib/config')();

describe('POST /file', function() {
    it('should fail if no file uploaded', function(done) {
        request(app)
            .post('/file')
            .send()
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('should respond with JSON', function(done) {
        request(app)
            .post('/file')
            .attach(__dirname + '/fixtures/example_file.png', 'picture_file')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

});
