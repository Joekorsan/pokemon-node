
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainers').insert([
        {name: 'Ash'},
        {name: 'Gohndi'},
        {name: 'Obama'},
        {name: 'Joe'},
        {name: 'Bel'}
      ]);
    });
};
