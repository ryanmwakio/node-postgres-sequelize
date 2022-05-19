"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "user1",
          email: "user1@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user2@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user3@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "channels",
      [
        {
          id: 1,
          name: "channel1",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "channel2",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "videos",
      [
        {
          id: 1,
          title: "video1ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "video2ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "video3ByUser2",
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("channels", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("videos", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("users", null, bulkDeleteOptions);
  },
};
