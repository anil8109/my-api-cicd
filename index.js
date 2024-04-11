const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require("./models");

// Require employee routes
const employeeRoutes = require('./route/route')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 2000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
db.sequelize.sync({
  //force: true
}).then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// define a root route
// using as middleware
app.use('/api/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});