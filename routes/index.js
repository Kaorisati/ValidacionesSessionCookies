var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('vistaGracias',{color:req.body.color, name:req.body.name});
});

module.exports = router;
