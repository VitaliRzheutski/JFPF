const Sequelize = require("sequelize");
const db = require("./database");

const Campus = db.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/04/1024px-401_loretto-1.jpg'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Campus;
