const db =require("../models");

module.exports = function(app) {



    app.get("/api/areas", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Area.findAll({
          include: [db.User]
        }).then(function(dbArea) {
          res.json(dbArea);
        });
      });


    app.post("/api/areas", function(req, res){

    db.Area.create(req.body).then(function(dbArea){
        res.json(dbArea)


    });

 });


}