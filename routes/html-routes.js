// =============================================================
const path = require("path");

// Routes
// =============================================================
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





