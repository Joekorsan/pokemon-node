const knex = require('../db/knex.js');



module.exports = {

  displayTrainers: function (req, res) {
    knex('trainers').then((trainers)=>{
      res.render('trainers.ejs', {trainers});
    })
  },

  trainerInfo: function (req, res) {
    knex('trainers')
    .where('id', req.params.id)
    .then((trainers)=>{
      knex('trainers').innerJoin('pokemon', 'pokemon.trainer_id', 'trainers.id')
      .where('pokemon.trainer_id', req.params.id)
      .then((pokemon)=>{
        console.log('pokemon:::: ',pokemon);
        res.render('info_trainers.ejs', {trainers:trainers[0], pokemon})
      })
    })
  }



}//end of module.exports
