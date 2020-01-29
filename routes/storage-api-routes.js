var db = require("../models");

module.exports = function(app) {
  app.get("/api/storages", function(req, res) {

     const query = {};
     if (req.query.areaid) {
      query.areaId = req.query.areaid;
    }
  
      //query.areaId = req.query.areaid;

    // 1. Add a join to include all of each Storage's Items
    db.Storage.findAll({
         where: query,
        include: [db.area]
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });

  app.get("/api/storages/:id", function(req, res) {
    // 2; Add a join to include all of the Storage's Items here
    db.Storage.findOne({
      where: {
        id: req.params.id
      },
      include: [db.area]
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });


  app.post("/api/storages", function(req, res) {
    db.Storage.create(req.body).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });

  app.delete("/api/storages/:id", function(req, res) {
    db.Storage.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });

};