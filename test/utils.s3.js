/**
 * testing lib/utils/s3.js
 */

var s3 = require('../lib/utils/s3.js');

describe('Amazon S3', function() {

    it('should returnthrow an error if key, secret, or bucket undefined', function(done) {
        try {
            var result = s3.config();
        } catch (e) {
            e.should.be.an.instanceof(Error);
        }
        
        done();
    });

    it('should return object if key,secret, bucket is passed', function(done) {
        var result = s3.config('key', 'secret', 'bucket');
        result.should.be.an('object');
        done();
    });

});
