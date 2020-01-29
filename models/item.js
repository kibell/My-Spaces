module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Item.associate = function(models) {
    // We're saying that a Item should belong to an Storage
    // A Items can't be created without an Storage due to the foreign key constraint
    Item.belongsTo(models.storage, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};