const express = require('express')
const route = express.Router()

route.get("/", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = route