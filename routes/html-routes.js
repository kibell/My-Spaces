// =============================================================
const path = require("path");
// Routes
// =============================================================
module.exports = function(app, passport) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.render("index.handlebars",res)
  });
  app.get("/home", ensureAuthentication, function(req, res, next) {
      console.log("logged in!!!")
    res.render("home.handlebars", {firstname: req.user.firstname, lastname: req.user.lastname})
  });
  app.get("/index", function(req, res) {
    res.render("index.handlebars",res)
  });

  app.get("/item", function(req, res) {
    res.render("item-list.handlebars",res)
  });

  app.post('/register', passport.authenticate('local-register', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true 
   }
));
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true 
    }
   ));
  app.get('/logout',function(req, res){
    req.session.destroy(function(err) {
        res.redirect('/');
   });
})
function ensureAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
       return next();
       } else {
      //user is not logged in
    }
  }
 }
