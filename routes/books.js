var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Books() {
  return knex('books')
}

router.get('/', function (req, res, next) {
  Books().select().then(function(books) {
    res.render('books', {books: books});
  })
});

router.get('/new', function (req, res, next) {
  res.render('newBook');
});

router.post('/new', function (req, res) {
  var bookNew = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    img_url: req.body.img_url,
    desc: req.body.desc
  }
  console.log(req.body)
  Books().insert(bookNew, 'id')
  res.redirect('/books')
})

module.exports = router;
