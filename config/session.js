const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const knex = require('../db/knex.js');

//this whole thing is one big function.
module.exports = function (app) {
  const store = new knexSessionStore({
    knex:knex,
    tablename:'session'
  })

  app.use(session({
    secret:'me luv u long time ling-ling',
    cookie: {
          maxAge: 2592000000 // 30 days
      },
      resave: false,
      saveUninitialized: false,
      store: store //this comes from above.

}))
}//end of module.exports
