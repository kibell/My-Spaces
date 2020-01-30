

//For handlebars
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8000;

const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const env = require('dotenv')
const models = require("./models")



// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//for PassPort

require('./config/passport/passport')(passport,models.User)
app.use(session({ secret: 'keyboard cat',
resave: true, 
saveUninitialized:true})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());




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
app.use(express.static(__dirname +'/public'));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//

// Routes
// =============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/items-api-routes.js")(app);
require("./routes/storage-api-routes.js")(app);
require("./routes/area-api-routes")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
    db.sequelize.sync({ force: false }).then(function() {
      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
    });

    


