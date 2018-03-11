
// OVERVIEW of STORY # 10
//
// You will be using cookies to keep track of which Pokemón are in the 'gym'.
// You will use cookies to set the values p1 and p2 to be the idof the two respective Pokemón in the gym.
// The gym should only hold two Pokemón.
// When you visit the Pokemón home page, if either the p1 or p2 cookies is not set, then you can click 'assign to gym' next to a Pokemón and they will be 'assigned to the gym' (i.e. their id will be assigned to either p1 or p2)
// and their 'in_gym' status in the database will be updated to true
// EXAMPLE: If you have a Raichu with an id of 22 in the database and you click 'assign to gym' then you would set a cookie p1 with a value of 22.
//
// NOTE: Your database should always be updated to have the current in_gym status of all Pokemón.

// #11
//
// When I visit the Pokemón home page
// And I see all Pokemón
// And there are already 2 Pokemón 'in the gym'
// Then I do not see 'assign to gym' links for any other Pokemón
// #12
//
// When I go to the Pokemón home page
// And I see all Pokemón
// And a Pokemón is 'in the gym'
// Then I see a link 'remove from gym' next to that Pokemón
// And I do NOT see a link 'assign to gym' next to that Pokemón
// Trainers

// #1
//
//
// When I click on the name of a Trainer
// Then I am taken to a show page
// And I see the name of that Trainer
// And I see all of the Pokemon they are currently training
// In the Gym
// #1
//
// As a user
// When I visit the gym home page
// And there are no Pokemón assigned to the gym
// Then I can select a Pokemón1 from a drop down menu that has all Pokemón names
// And I can select a Pokemón2 from a drop down menu that has all Pokemón names
// #2
//
// When I visit the gym home page
// And there are no Pokemón assigned to the gym
// And I select a Pokemón1 from a drop down menu that has all Pokemón names
// And I select a Pokemón2 from a drop down menu that has all Pokemón names
// When I click 'Add Pokemón to the Gym'
// Then I am redirected to the gym home page
// And I see my Pokemón 'in the gym'
// #3
//
// When I visit the gym home page
// And only one Pokemón is 'in the gym'
// Then I see a Pokemón name in the Pokemón1 slot
// And by the Pokemón2 slot I see a dropdown menu with all Pokemón names
// #4
//
// When I visit the gym home page
// And only one Pokemón is 'in the gym'
// And I select a second Pokemón name from a dropdown menu
// And I click the 'Add Pokemón to the Gym' button
// Then I am redirected to the gym home page
// And I see a Pokemón in the Pokemón1 slot
// And I see my selected Pokemón in the Pokemón2 slot
// #5
//
// When I visit the gym home page
// And only one Pokemón is 'in the gym'
// And I select a second Pokemón name from a dropdown menu
// And that Pokemón is the SAME Pokemón already in a slot
// Then the gym home page is rendered again
// And I a see an error message
// And that error message says
// "A Pokemón cannot fight itself! Please choose a different Pokemón!"
// And that message is the color red
// #6
//
// When I visit the gym home page
// And 2 Pokemón are 'in the gym'
// Then I see a Pokemón name in the Pokemón1 slot
// And I see a Pokemón name in the Pokemón2 slot
// #7
//
// When I visit the gym home page
// And two Pokemón are already in the gym
// Then I see a 'battle' button
// #8
//
// When I visit the gym home page
// And only one Pokemón is in the gym
// Then I do not see the 'battle' button
// #9
//
// When I visit the gym home page
// And two Pokemón are already in the gym
// And I click the 'battle' button
// Then the Pokemón with the higher Combat Power 'wins' the fight
// And the winning Pokemón's name is displayed on the page next to the word 'WINNER!'
// HINT: Would it be simpler if all the data you need is passed in to the view when the page loads (before the user clicks the button?)? HOWEVER, a Pokemón's Combat Power should NOT be stored in the cookie. You will need to get that info from the database.
//
// #10
//
// When I visit the gym home page
// And I click the 'reset' button (or link)
// Then all the Pokemón are removed from the gym
// Stretch Goals
// #1
//
// As a user
// When I make 2 Pokemón battle
// Then the winner's CP is incremented by 20
// #2
//
// Write a migration that adds an image field to the Pokemón table that takes an image url.
//
// Display the image on both the gym and the Pokemón index page.
//
// WIREFRAMES
// You can use these mockups/wireframes as a reference. Your design does not have to exactly match, but it should look as good or preferably BETTER than the mockups:
