"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Rincewind"
        },
        {
          name: "Mortimer, Duke of Sto Helit"
        },
        {
          name: "Esmerelda Weatherwax"
        },
        {
          name: "Gytha Ogg"
        },
        {
          name: "Magrat Garlick"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
