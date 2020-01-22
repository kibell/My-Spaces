

const PORT = process.env.PORT || 8000;
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const env = require('dotenv')
//Models
const models = require("./models")



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//for PassPort

require('./config/passport/passport')(passport,models.user)
app.use(session({ secret: 'keyboard cat',
resave: true, 
saveUninitialized:true})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



//For handlebars
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const methodOverride = require("method-override");
const exphbs = require ("express-handlebars");

// Sets up the Express App
// =============================================================


// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override POST with ?_method=PUT
app.use(methodOverride("_method"));

// Static directory
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app,passport);



//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice!')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


app.listen(PORT, function() {
  console.log("Listening on port", PORT);
});





// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


