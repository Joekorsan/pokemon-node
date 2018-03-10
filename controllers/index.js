const knex = require('../db/knex.js');

module.exports = {

  dashBoard: function (req, res) {

    if (!req.session.visted) {
        req.session.visted = true;
        res.redirect('/pokemon')
    }else{
      knex('pokemon').then((result)=>{
        res.render('index.ejs', {pokemon: result})
      })
    }




  }//end of dashboard

}
