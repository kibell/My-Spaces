// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  

  app.get("/", function(req, res) {
    res.render("index",res)
  });

  app.get("/home",   function(req, res, next) {
      console.log("logged in!!!")
    res.render("home", res)
  });

  app.get("/login", function(req, res) {
    res.render("index",res)
  });


  app.post('/register', passport.authenticate('local-register', {
    successRedirect: '/home',

    failureRedirect: '/'
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

<<<<<<< HEAD
// })



// function isLoggedIn(req, res, next) {
=======






   function isLoggedIn(req, res, next) {
>>>>>>> b224495c5546c9fcef7780d2428f7f7aa17dfc4e
 
      if (req.authenticated){

     return next();
     }

    res.redirect('/home');
    }

}





