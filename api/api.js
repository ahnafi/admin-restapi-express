const express = require("express");
const router = express.Router();
const response = require("../db/response");
const { getAllData } = require("../repository/repository");

router.get("/datas", (req, res) => {
  getAllData((err, data) => {
    if (err) {
      return response(500, err, "server error", res);
    }
    response(200, data, "select all datas", res);
  });
});

module.exports = router;
