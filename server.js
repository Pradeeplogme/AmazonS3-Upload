var express    = require('express'),
    middleware = require('./lib/middleware'),
    app        = express.createServer();

/**
 * Create NodeServer
 */

app.configure(function(){

    express.logger();
    app.use(express.bodyParser({
        keepExtensions: true
    }));
    app.use(express.cookieParser());


    // Serve static files from the public dir
    app.use(express.static(__dirname + '/public'));
    

    // Views using simple HTML files
    app.set('views', __dirname + '/public');
    app.set('view options', {layout: false});
    app.register('.html', {
        compile: function(str, options) {
            return function(locals){
                return str;
            };
        }
    });
});

// Include routes
require('./lib/routes')(app);

module.exports = app;
