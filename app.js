// Call required packages for the app
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { port } = require("./config");

// Setting up the application
const app = express();

// Monitors HTTP requests in the console
app.use(morgan("dev"));

// Load/Start application
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})