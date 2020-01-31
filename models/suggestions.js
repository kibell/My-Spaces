module.exports = function(sequelize, DataTypes){
    const Suggestion = sequelize.define("suggestion", {
        name: DataTypes.STRING, 
        storage_type: DataTypes.STRING, 
        description: DataTypes.STRING
    }); 

    return Suggestion; 
}