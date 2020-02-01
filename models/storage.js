module.exports = function(sequelize, DataTypes) {
  
  const Storage = sequelize.define("Storage", {

    
    // Giving the Storage model a name of type STRING
    name: DataTypes.STRING,
    } 
  );

  Storage.associate = function(models) {
    // Associating Storage with Items
    // When an Storage is deleted, also delete any associated Items
    Storage.belongsTo(models.Area, {
      onDelete: "cascade",
      foreignKey: {
      }
    });
    Storage.belongsTo(models.User, 
      {
      through: models.Area,
      foreignKey: "StorageId" 
    })
  };

  
  return Storage;
};