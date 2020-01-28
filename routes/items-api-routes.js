// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for retrieving all of the item data from the DOM
  app.get("/api/items", function(req, res) {
    const query = {};
    if (req.query) {
      query.StorageId = req.query.id;
    }
    // 1. Add a join here to include all of the Storages to these Items
    db.Item.findAll({
        where: query,
        include: [db.Storage]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Get route for retrieving a single Item
  app.get("/api/items/:id", function(req, res) {
    // 2. Add a join here to include the Storage 
    db.Item.findOne({
      where: {
        id: req.params.barcode_id
      },
      include: [db.Storage]
    }).then(function(dbItem) {
      console.log(dbItem);
      res.json(dbItem);
    });
  });

  // POST route for saving a new Item
  app.post("/api/items/:id", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // DELETE route for deleting Item
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.barcode_id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating Item
  app.put("/api/items", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.barcode_id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};

