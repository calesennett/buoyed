/* Static pages */

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Buoyed' });
});

module.exports = router;
