
module.exports = function(sequelize, DataTypes) {
  
    const Area = sequelize.define("area", {
      // Giving the Storage model a name of type STRING
      name: DataTypes.STRING,

        
      

    });
  
    Area.associate = function(models) {
        // Associating Storage with Items
        // When an Storage is deleted, also delete any associated Items
        Area.belongsTo(models.user, {
            
        });

        Area.hasMany(models.storage, {
           
        });
      };
  
     
      
     
    return Area;
  };