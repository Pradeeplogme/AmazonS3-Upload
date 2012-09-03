var app = require('./server');

// Include configs
require('./lib/config')();

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
  console.log(process.env.NODE_ENV);
});
