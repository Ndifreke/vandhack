
const models = require("./index");

const actorModel = (sequelize, DataTypes) => {
  const actorSchema = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
      onDelete: "CASCADE"
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avater_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  const Actor = sequelize.define("Actor", actorSchema, {
    freezeTableName: false,
    hooks: {
      beforeCreate: (actor, options) => {
        return actor;
      }
    }
  });
  return Actor
};
module.exports = actorModel