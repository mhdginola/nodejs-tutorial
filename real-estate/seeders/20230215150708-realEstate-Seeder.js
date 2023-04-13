'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('real_estates', [
      {
        id: 1,
        name: 'Rumah 1',
        price: 123,
        locationId: 1,
        statusId: 1,
        typeOfPropertyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Rumah 2',
        price: 4343,
        locationId: 2,
        statusId: 1,
        typeOfPropertyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Rumah 3',
        price: 4623,
        locationId: 1,
        statusId: 2,
        typeOfPropertyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Rumah 4',
        price: 9123,
        locationId: 1,
        statusId: 1,
        typeOfPropertyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Rumah 5',
        price: 23,
        locationId: 2,
        statusId: 2,
        typeOfPropertyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('real_estates', null, {});
  }
};
