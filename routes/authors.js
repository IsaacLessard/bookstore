var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Authors() {
  return knex('authors')
}

router.get('/', function (req, res, next) {
  Authors().select().then(function(authors) {
    res.render('authors', {authors: authors});
  })
});

router.get('/new', function (req, res, next) {
  res.render('newAuthor');
});

router.post('/new', function (req, res) {
  var authorNew = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    photo_url: req.body.photo_url,
    bio: req.body.bio
  }
  console.log(req.body)
  Authors().insert(authorNew, 'id').then(function(id){
    res.redirect('/authors')
  })
})

router.get('/:id', function(req, res) {
  Authors().select().where('id', req.params.id).then(function(results) {
    var author = results[0];
    if (author) {
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

  router.post('/:id/del', function(req, res) {
    Authors().select().where('id', req.params.id).del().then(function(){
      res.redirect('/authors')
    })
  })

module.exports = router;
