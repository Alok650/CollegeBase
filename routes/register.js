const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

router.get("/signup", (req, res) => {
  res.send("<h1>Sign Up Page</h1>");
});

module.exports = router;
