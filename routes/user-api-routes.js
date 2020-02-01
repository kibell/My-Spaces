// const db = require("../models");

// module.exports = function(app) {
//   app.get("/api/users", function(req, res) {
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.area
//     // const users = await User.findAll({
//     //     include: {
//     //       model: area,
//     //       as: 'area',
//     //       include: {
//     //         model: storage,
        
//     //       }
//     //     }
//     //   });
//       console.log(JSON.stringify(users, null, 2));



// //     db.user.findAll({
// //         include: [{
// //             model: area,
            
// //             include: [{
// //               model: storage,
// //             required: false
// //             }]
// //         }]
// //     }).then(function(dbUser) {
// //       res.json(dbUser);
// //     });
// //   });

//   app.get("/api/users/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.area
//     db.user.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.areas]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   app.post("/api/users", function(req, res) {
    
//     db.user.create(req.query).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   app.delete("/api/users/:id", function(req, res) {
//     db.user.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   })
// }
