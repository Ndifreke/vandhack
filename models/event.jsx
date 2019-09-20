
const models = require("./index");

const eventModel = (sequelize, DataTypes) => {
  const eventSchema = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
      onDelete: "CASCADE"
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false
    },

    actor_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  const Event = sequelize.define("Event", actorSchema, {
    freezeTableName: true,
    hooks: {
      beforeCreate: (event, options) => {
        return article;
      }
    }
  });
 
  Event.associate = (db) => {
    Event.belongsToMany(db.Actor, {
      foreignKey: "actor_id",
      target: "id",
      as: "actorsss",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  }
  return Event;
}

module.exports = eventModel
