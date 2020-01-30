module.exports = function(sequelize, DataTypes) {
  
  const Storage = sequelize.define("storage", {

    
    // Giving the Storage model a name of type STRING
    name: DataTypes.STRING,


    
  });

  Storage.associate = function(models) {
    // Associating Storage with Items
    // When an Storage is deleted, also delete any associated Items
    

    Storage.belongsTo(models.area,{
     
    })

 
  };
  
  return Storage;
}