const knex = require('../db/knex.js')

module.exports = {
  //display pokemon
  displayPokemon:function (req,res) {
    if(!req.session.pokemonArr){
      req.session.pokemonArr = [];
    }

    knex('pokemon').then((result)=>{
      res.render('pokemon.ejs', {pokemon: result})
    })
  },//end of displayPokemon function


  addPokemon:function (req, res) {
    knex('pokemon').insert({
      name:req.body.name,
      cp: req.body.cp,
      in_gym:false,
      assigned: false,
      trainer_id: req.body.trainers
    },'*')
    .then((result)=>{
      req.session.pokemonArr.push(result[0])
      req.session.save((result)=>{
        res.redirect('/');
      })
    })
  },//end of addPokemon function

  info:function (req, res) {
    knex('pokemon')
    .where('id', req.params.id)
    .then((result)=>{
      knex('trainers').where('id', result[0].trainer_id).then((trainer)=>{
        console.log('INFO TREAINER: ',trainer[0]);
        res.render('info_pokemon.ejs', {pokemon:result[0], trainer: trainer[0]})
      })
    })

  },//end of info function

  show: function (req, res) {
    knex('pokemon').where('id', req.params.id)
    .then((pokemon)=>{
      knex('trainers')
      .then((trainers)=>{
        console.log('SHOW TRAINERS: ', trainers);
        res.render('edit_pokemon', {pokemon:pokemon[0], trainers:trainers})
      })
    })
  },

  edit: function (req , res) {
    knex('pokemon')
    .where('id', req.body.id)
    .update({
      name: `${req.body.name === '' ? req.body.name2 : req.body.name}`,
      cp: `${req.body.cp === '' ? req.body.cp2 : req.body.cp}`,
      trainer_id: req.body.trainers
    }, '*').then((result)=>{
      console.log('EDIT TRAINER: ', result);
      res.redirect(`/pokemon/info/${req.body.id}`)
    })
  },

  addForm: function (req, res) {
    knex('trainers').then((trainers)=>{
      res.render('form_pokemon.ejs', {trainers})
    })

  },

  deletePokemon: function (req, res) {
    knex('pokemon').where('id', req.params.id).del().then(()=>{
      res.redirect('/')
    })
  }//end of addform


}//end of module.exports
