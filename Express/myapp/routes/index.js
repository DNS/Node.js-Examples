var express = require('express');
var router = express.Router();
var app = express()

var cookieParser = require('cookie-parser');
app.use(cookieParser('my secret here'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

// get query string
router.get('/hello', function(req, res, next) {
	res.send('content: ' + req.query.name);
});

// cookies, sessions
router.get('/cookie', function(req, res, next) {
	res.cookie('cookieName', 'cookieValue', {
		expires: new Date(Date.now() + 900000), // expires in 15 minutes
		path: '/',
		domain: 'localhost',
		secure: false, // only transmit cookie over https
		httpOnly: true, // only accessible by the web server
	  });
	res.send('ok cookie');
});


module.exports = router;


