const db = require("../models");

module.exports = function(app) {
  app.get("/api/storages", function(req, res) {
    // 1. Add a join to include all of each Storage's Items
     const query = {};
      //  query.areaId = req.body.areaId
   
     
    db.storage.findAll({
      // where: query,
        include: [db.area],
        
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
    console.log(res, req)
  });

  app.get("/api/storages/:id", function(req, res) {
    // 2; Add a join to include all of the Storage's Items here
    db.storage.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Areas]
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });


  app.post("/api/storages", function(req, res) {

    
    // req.body.areaId = req.area.id
    db.storage.create(req.body).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });

  app.delete("/api/storages/:id", function(req, res) {
    db.storage.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStorage) {
      res.json(dbStorage);
    });
  });



// PUT route for updating areas
app.put("/api/storages", function(req, res) {
  db.storage.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbStorage) {
    res.json(dbStorage);
  });
});

}