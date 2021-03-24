// Call required packages for the app
const express = require("express");
const morgan = require("morgan");
const ejsLayout = require("express-ejs-layouts");
const path = require("path");
const { port } = require("./config");

// Setting up the application
const app = express();

// Monitors HTTP requests in the console
app.use(morgan("dev"));

// Set static path to serve static files
app.set("/static", express.static(path.join(__dirname, "public")));

// Set Layout
app.set("view engine", "ejs");
app.use(ejsLayout)
app.set("layout", "./layouts/main-layout")

// Load/Start application
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})