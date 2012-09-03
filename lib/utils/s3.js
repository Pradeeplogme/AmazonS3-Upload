/**
 * Upload and image to amazon S3
 *
 * @author Shane A. Stillwell
 */

var key, 
    secret, 
    bucket,
    Client,
    knox = require('knox');

/**
 * Set up config data for S3
 *
 * @param {String} Amazon key
 * @param {String} Amazon secret
 * @param {String} Amazon bucket
 *
 */
exports.config = function(s3key, s3secret, s3bucket) {
    key        = s3key;
    secret     = s3secret;
    bucket     = s3bucket;

    Client = knox.createClient({
        key    : key,
        secret : secret,
        bucket : bucket
    });
    
    return Client;
};

/**
 * Upload a new photo to Amazon S3
 *
 * @author Shane A. Stillwell
 *
 * @param {String} file The location of the file to upload
 * @param {String} filename The name of the file to push to S3
 * @param (Function} callback The callback funtion
 */
var uploadFile = exports.uploadFile = function(file, filename, callback) {

    var headers = {
    };

    // If Client is not an object, then config didn't get set
    if (typeof Client !== 'object') {
        callback(new Error('Client is not an object'));
        return;
    }

    // Upload file to S3
    Client.putFile(file, filename, headers, callback);
    
};

/**
 * Receives a file object from express and prepares it for Amazon S3 upload
 *
 * @param {Object} file ExpressJS file object
 * @param {String} filename Base filename of the file 
 * @param {Function} callback
 */
exports.passthroughUpload = function(file, filename, callback) {

    // Need to get the 
};

