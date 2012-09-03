/**
 * Routes
 */

var controllers     = require('../controllers'),
    middleware      = require('../middleware'),
    user            = controllers.user;

module.exports = function(app) {
    
    /**
     * Upload a file to /file and forward to amazon
     */
    app.post('/file', middleware.amazon.uploadToS3, function(req, res, next) {
        // req.filename is set by middleware.amazon
        res.send('File uploaded. Filename: ' + req.filename);
    });
};
