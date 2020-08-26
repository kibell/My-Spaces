const db = require('../models')

module.exports = function(app) {
    
  // GET route for getting all of the areas
  app.get("/api/areas", function(req, res) {
    console.log(req);
    ("=========")
    const query = {};
    const userid = req.user.id;

      if (userid) {
      query.userId = userid;
    }
    
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Area.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbAreas) {
      res.json(dbAreas);
    });
  });


  // Get route for retrieving a single Areas
  app.get("/api/areas/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Area.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbAreas) {
      res.json(dbAreas);
    });
  });

  // Areas route for saving a new Areas
  app.post("/api/areas", function(req, res) {
    req.body.userId = req.user.id
    db.Area.create(req.body).then(function(dbAreas) {
      res.json(dbAreas);
    });
  });

  // DELETE route for deleting areas
  app.delete("/api/areas/:id", function(req, res) {
    db.Area.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAreas) {
      res.json(dbAreas);
    });
  });

  // PUT route for updating areas
  app.put("/api/areas", function(req, res) {
    db.Area.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbAreas) {
      res.json(dbAreas);
    });
  });
}