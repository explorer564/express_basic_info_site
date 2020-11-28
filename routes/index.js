var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content', { title: 'Index' });
});

router.get('/about', function(req, res, next) {
  res.render('content', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('content', { title: 'Contact Me' });
});



module.exports = router;
