// Call required packages for the app
const express = require("express");
const router = express.Router();

// GET Route definition - Home
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home Page",
    message: "Hello World"
  });
});

module.exports = router;