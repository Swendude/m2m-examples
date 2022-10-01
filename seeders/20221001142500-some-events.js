"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Festival in Ankh-Morpork",
          organizerId: 1
        },
        {
          name: "Funeral",
          organizerId: 2
        },
        {
          name: "Campfire Dancing",
          organizerId: 3
        },
        {
          name: "Demon summoning",
          organizerId: 3
        },
        {
          name: "Herb brewing",
          organizerId: 5
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  }
};
