// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.render("index", res);
  });

  // index route loads home.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  // storage route loads storage.html
  app.get("/storage", function(req, res) {
    res.render("storage", res);
  });

  // home route loads home.html
  // app.get("/home", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  // items route loads itemsList.html
  app.get("/itemsList", function(req, res) {
    res.render("item-list", res);
  });

};


module.exports = function(app) {
  app.get("/storage", function(req, res) {
    res.render("storage", res);
  });
 }
