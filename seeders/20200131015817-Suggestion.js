'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Suggestions',
    [
      {
        name: 'First aid kit', 
        storage_type: 'General Storage', 
        description: 'First aid kit'
      }, 
      {
        name: 'Batteries', 
        storage_type: 'General Storage', 
        description: 'Batteries'
      }, 
      {
        name: 'Light bulbs', 
        storage_type: 'General Storage', 
        description: ''
      },
      {
        name: 'Trash bags', 
        storage_type: 'General Storage', 
        description: ''
      }

    ],
    {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  }),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Suggestions', null, {}),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  
};
