
exports.seed = function(knex, Promise) {
  return Promise.all([

    knex('books').del(),

    knex('books').insert({title: 'Python In A Nutshell', author: 1, author2: 2, author3: 3, genre: 'Python', img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg'}),

    knex('authors').del(),

    knex('authors').insert({first_name: 'Alex', last_name: 'Martelli', photo_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'}),
    knex('authors').insert({first_name: 'Anna', last_name: 'Ravenscroft', photo_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'}),
    knex('authors').insert({first_name: 'Steve', last_name: 'Holden'})



  ]);
};
