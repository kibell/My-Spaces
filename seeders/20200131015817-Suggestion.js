'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Suggestions',
    [
      {
        name: '', 
        storage_type: '', 
        description: ''
      }, 
      {
        name: '', 
        storage_type: '', 
        description: ''
      }, 
      {
        name: '', 
        storage_type: '', 
        description: ''
      },
      {
        name: '', 
        storage_type: '', 
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
