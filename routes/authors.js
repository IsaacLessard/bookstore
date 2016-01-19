var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Authors() {
  return knex('authors')
}

router.get('/', function (req, res, next) {
  Books().select().then(function(books) {
    res.render('authors', {authors: authors});
  })
});

router.get('/new', function (req, res, next) {
  res.render('newAuthor');
});

router.post('/new', function (req, res) {
  var bookNew = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    photo_url: req.body.photo_url,
    bio: req.body.bio
  }
  console.log(req.body)
  Books().insert(bookNew)
  res.redirect('/authors')
})

router.get('/:id', function(req, res) {
  Books().select().where('id', req.params.id).then(function(results) {
    var book = results[0];
    if (book) {
      res.render('author', {
        author: author
      })
    } else {
      res.render('error', {
        message: 'This author does not exist.'
      })
    }
  })
})

module.exports = router;
