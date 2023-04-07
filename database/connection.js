
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbclient = process.env.DB_CLIENT; 
const database = process.env.DB_DATABASE;

var knex = require('knex')({
    client: dbclient,
    connection: {
      host : dbHost,
      user : dbUser ,
      password : dbPassword,
      database : database
    }
  });

module.exports = knex
