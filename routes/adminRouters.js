const express = require("express");
const router = express.Router();
const { verify } = require("../middleware/auth-middleware");
const { getAllData } = require("../repository/repository");
const {
  controllAddData,
  controllFindData,
  controllUbahData,
  controllDeleteData,
} = require("../controllers/admin-controller");

// ADMIN PAGE

router.get("/", verify, (req, res) => {
  getAllData((err, data) => {
    if (err) throw err;
    res.render("index", {
      data,
    });
  });
});

// ADD DATA

router.get("/add", verify, (req, res) => {
  res.render("add");
});

router.post("/add", verify, (req, res) => {
  controllAddData(req, res);
});

// EDIT DATA

router.get("/edit/:id", verify, (req, res) => {
  controllFindData(req, res);
});

router.put("/edit", verify, (req, res) => {
  controllUbahData(req, res);
});

// DELETE DATA

router.delete("/delete", verify, (req, res) => {
  controllDeleteData(req, res);
});

module.exports = router;
