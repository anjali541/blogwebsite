

/* GET home page. */
exports.indexhomepage = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

exports.indexlogin = function(req, res, next) {
  res.render('login', { title: 'Express' });
};

exports.indexprofile = function(req, res, next) {
    res.render('profile', { title: 'Express' });
  };
exports.indexregister = function(req, res, next) {
  res.render('register', { title: 'Express' });
};

