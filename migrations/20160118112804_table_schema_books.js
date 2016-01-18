
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('photo_url');
    table.text('bio');
  }).then(function(){
    return knex.schema.createTable('books', function(table){
      table.increments('id');
      table.string('title');
      table.integer('author').references('id').inTable('authors');
      table.integer('author2').references('id').inTable('authors');
      table.integer('author3').references('id').inTable('authors');
      table.string('genre');
      table.string('img_url');
      table.text('desc');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors').then(function(){
    return knex.schema.dropTable('books');
  });
};
