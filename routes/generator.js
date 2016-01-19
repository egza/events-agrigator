var express = require('express');
var _ = require('lodash');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  var list = _(Array(_.random(10,15)))
              .map(function (val, i) {
                return {
                  id: i
                };
              })
              .value();
  res.json(list);
});

module.exports = router;
