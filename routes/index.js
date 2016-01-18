var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Events Calendar' });
});
module.exports = router;
