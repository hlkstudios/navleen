var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res){
  res.render('about', { title: 'About', })
});

router.get('/projects', function(req, res){
  res.render('projects', { title: 'Projects'})
});

router.get('/users', function(req, res){
  res.render('users', { title: 'User Management System'})
});

router.get('/crud/add-user', function(req, res){
  res.render('crud/add-user', { title: 'User Management System'})
});

router.get('/crud/update-user', function(req, res){
  res.render('crud/update-user', { title: 'User Management System'})
});


router.get('/contact', function(req, res){
  res.render('contact', { title: 'Contact'})
});


module.exports = router;
