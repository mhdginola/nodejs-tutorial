'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('locations', [{
      id: 1,
      name: 'Jakarta Barat',
      isDefault: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Jakarta Pusat',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Jakarta Selatan',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'Jakarta Timur',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'Jakarta Utara',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'Bekasi',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      name: 'Tanggerang',
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('locations', null, {});
  }
};
