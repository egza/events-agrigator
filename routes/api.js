var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/psy', function(req, res, next) {
  res.json({
    oppa: 'gangnamJSON'
  });
});

module.exports = router;
