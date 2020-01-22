<<<<<<< HEAD
=======
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
>>>>>>> ac51a6483a13243ed27c321bc3f3a7825ad427d4
// =============================================================
const path = require("path");

// Routes
// =============================================================
<<<<<<< HEAD
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  

  app.get("/", function(req, res) {
    res.render('index.html')
  });



  app.get("/dashboard", isLoggedIn,  function(req, res, next) {
      console.log("logged in!!!")
    res.send("../public/dashboard.html")
  });


  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });




  app.post('/register', passport.authenticate('local-register', {
    successRedirect: '/dashboard',

    failureRedirect: '/register'
}





));

app.post('/login', passport.authenticate('local-login', {
   
   
    successRedirect: '/dashboard',

    failureRedirect: '/login',

    failureFlash: true 
}

));



app.get('/logout',function(req, res){
   
 
        req.session.destroy(function(err) {
     
            res.redirect('/');
     
        });
     


})








function isLoggedIn(req, res, next) {
 
    if (req.authenticated){

        return next();
    }

    res.redirect('/login');

}



}





=======
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // storage route loads storage.html
  app.get("/storage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/storage.html"));
  });

  // home route loads home.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // items route loads itemsList.html
  app.get("/itemsList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/itemsList.html"));
  });

};
>>>>>>> ac51a6483a13243ed27c321bc3f3a7825ad427d4
