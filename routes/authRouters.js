const express = require("express");
const router = express.Router();
const { controllLogin } = require("../controllers/auth-controller");

// LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    title: "login",
    error: "",
  });
});

router.post("/login", (req, res) => {
  controllLogin(req, res);
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/login");
  });
});

module.exports = router;
