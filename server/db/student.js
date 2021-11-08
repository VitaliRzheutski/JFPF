const Sequelize = require("sequelize");
const db = require("./database");

const Student = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      },
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.shutterstock.com/image-vector/happy-group-students-jumping-on-white-518870542",
  },
  gpa: {
    type: Sequelize.DECIMAL(0.0, 4.0),
  },
});
module.exports = Student;
