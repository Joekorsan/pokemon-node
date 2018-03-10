const pokemon = require('../controllers/pokemon.js');
const index = require('../controllers/index.js');
const trainers = require('../controllers/trainers.js')


module.exports = (app)=>{

app.get('/', index.dashBoard);

app.get('/pokemon', pokemon.displayPokemon);

app.get('/pokemon/form_pokemon', pokemon.addForm)

app.post('/pokemon/add', pokemon.addPokemon);

app.get('/pokemon/info/:id', pokemon.info)

app.get('/pokemon/delete/:id', pokemon.deletePokemon);



app.get('/pokemon/edit/:id', pokemon.show);

app.post('/pokemon/edit', pokemon.edit);

app.get('/trainers', trainers.displayTrainers);

app.get('/trainers/info/:id', trainers.trainerInfo)


}
