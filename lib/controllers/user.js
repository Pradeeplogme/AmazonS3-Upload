
exports.index = function(req, res){
  res.send('index user');
};

/**
 * GET     /forums/new          ->  new
 */
exports.new = function(req, res){

  res.send('new daily');
};

exports.create = function(req, res){
    res.send('user create');
        

};

exports.show = function(req, res){
  res.send('show daily ' + req.params.id);
};

exports.edit = function(req, res){
    res.send('edit');
};

exports.update = function(req, res){
    res.send('update');

};

exports.destroy = function(req, res){
  res.send('destroy daily ' + req.params.daily);
};


