/**
 * Configuration parameters for node environment
 *
 * The following env variables need to be set
 * EXAMPLE_AWSS3_KEY
 * EXAMPLE_AWSS3_SECRET
 * EXAMPLE_AWSS3_BUCKET
 * 
 */

var amazonS3 = require('../utils/s3.js');

module.exports = function() {

    try {

        // Amazon S3 upload
        var key    = process.env.EXAMPLE_AWSS3_KEY,
            secret = process.env.EXAMPLE_AWSS3_SECRET,
            bucket = process.env.EXAMPLE_AWSS3_BUCKET;
            amazonS3.config(key, secret, bucket);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }

};


