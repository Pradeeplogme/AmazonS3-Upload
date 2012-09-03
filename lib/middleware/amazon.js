/*
 * Amazon Middleware Services
 */

var AmazonS3 = require('../utils/s3'),
    Utils    = require('../utils'),
    mime     = require('mime');

/**
 * Uploads a file to the /files directory on Amazon S3
 */
exports.uploadToS3 = function(req, res, next) {

    // If there is no files we cannot proceed
    if (!req.files) {
        res.send('Missing photo', 400);
        return;
    }

    // Get list of files uploaded
    var files = Object.keys(req.files);

    // Loop through files and upload them to AmazonS3
    for (var i = 0, l = files.length; i < l; i++) {

        var key      = files[i],
            file     = req.files[key], // File object from formidable
            random   = Utils.randomGenerator(),  // Generate a random string for a filename
            ext      = mime.extension(file.type), // Get the extension from the upload type
            filename = random + '.' + ext;

        // Assign filename to the req object
        req.filename = filename;

        // Submit to S3
        AmazonS3.uploadFile(file.path, '/files/' + filename, function(err, s3res) {
            console.log(err);
        });
    }

    // Call the next stack
    next();


};
