var express = require('express');
var router = express.Router();

/* GET home page. */

router.use('/signin',require('./signin'))


router.use('/signup',require('./signup'))


module.exports = router;
