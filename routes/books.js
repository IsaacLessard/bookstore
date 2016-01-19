var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Books() {
  return knex('books')
}
function Authors() {
  return knex('authors')
}

router.get('/', function (req, res, next) {
  Books().select().then(function(books) {
    res.render('books', {books: books});
  })
});

router.get('/new', function (req, res, next) {
  Authors().select().then(function(authors) {
    res.render('newBook', {authors: authors});
  })
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
  Books().insert(bookNew, 'id').then(function(id){
    res.send('created new id of ' + id)
  })
})

router.get('/:id', function(req, res) {
  Books().select().where('id', req.params.id).then(function(results) {
    var book = results[0];
    if (book) {
      res.render('book', {
        book: book
      })
    } else {
      res.render('error', {
        message: 'This book does not exist.'
      })
    }
  })
  })

  router.post('/:id/del', function(req, res) {
    Books().select().where('id', req.params.id).del().then(function(){
      res.send('book deleted')
    })
  })

module.exports = router;
