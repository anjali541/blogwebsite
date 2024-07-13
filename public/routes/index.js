
var express = require('express');
var router = express.Router();

const {
  indexhomepage,
  indexlogin,
  indexprofile,
  indexregister,
} = require("../controllers/user.controller");
const { isLoggedIn } = require("../middleware/auth");

router.get('/',indexhomepage);

router.get('/login',indexlogin);

router.get('/profile',indexprofile);
router.get('/register',indexregister);

module.exports = router;