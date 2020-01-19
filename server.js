
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const env = require('dotenv')
const exphbs = require('express-handlebars')
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





