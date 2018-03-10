
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {name: 'Pikachu', trainer_id: 1, cp:35, in_gym:false, assigned: true},
        {name: 'Butterfree', trainer_id: 2, cp:45, in_gym:false, assigned: true},
        {name: 'Charizard', trainer_id: 3, cp:78, in_gym:false, assigned: true}
      ]);
    });
};
