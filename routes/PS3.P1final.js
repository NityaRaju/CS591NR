var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Nityas World' });
});

router.get('/get', function(req, res, next) {
    res.render('PS3_P2', { title: 'Hey Professor, please give me an A' });
});

router.post('/post', function(req, res, next) {

    res.render('PS3_P2', {title: req.body.phrase, length: req.body.phrase.length});
});

module.exports = router;

