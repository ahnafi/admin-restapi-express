const {
  addData,
  findData,
  editData,
  deleteData,
} = require("../repository/repository");

function controllAddData(req, res) {
  const judul = req.body.judul;
  const harga = parseInt(req.body.harga);
  const value = [judul, harga];
  addData(value, (err, data) => {
    if (err) throw err;
    if (data.affectedRows == 1) {
      res.redirect("/");
    }
  });
}

function controllFindData(req, res) {
  const id = parseInt(req.params.id);
  findData(id, (err, data) => {
    if (err) throw err;
    res.render("edit", {
      data: data[0],
    });
  });
}

function controllUbahData(req, res) {
  const { id, judul, harga } = req.body;
  const value = [judul, parseInt(harga), parseInt(id)];
  editData(value, (err, data) => {
    if (err) throw err;
    if (data.affectedRows == 1) {
      res.redirect("/");
    }
  });
}

function controllDeleteData(req, res) {
  const value = parseInt(req.body.id);
  deleteData(value, (err, data) => {
    if (err) throw err;
    if (data.affectedRows == 1) {
      res.redirect("/");
    }
  });
}

module.exports = {
  controllAddData,
  controllFindData,
  controllUbahData,
  controllDeleteData,
};
