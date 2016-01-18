require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/bookstore'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
