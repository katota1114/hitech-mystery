var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/start', function(req, res, next) {
  res.render('start');
});

router.get('/step1', function(req, res, next) {
  res.render('step1');
});

router.get('/step2', function(req, res, next) {
  res.render('step2');
});

router.get('/step2-success', function(req, res, next) {
  res.render('step2-success');
});

router.get('/step3', function(req, res, next) {
  res.render('step3');
});

router.get('/step4', function(req, res, next) {
  res.render('step4');
});

module.exports = router;
