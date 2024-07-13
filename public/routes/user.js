var express = require('express');
var router = express.Router();

const {
    homepage,
    signuppage,
    signuppage,
    logout
  
  } = require("../controllers/user.controller");
  const passport = require("passport")
  
  router.get('/',homepage);
  
  router.post('/login',signuppage);
  
  router.get('/logout',logout);
  router.post('/register',signuppage);







module.exports = router;
