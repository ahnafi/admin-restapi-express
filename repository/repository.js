const database = require("../db/database");
require("dotenv").config();
const paket = process.env.DB_CRUD;
const auth = process.env.DB_AUTH;

function getUserLogin(params, callback) {
  const sql = `SELECT username, password FROM ${auth} WHERE (username) LIKE ? LIMIT 1 `;
  database(sql, params, (err, data) => {
    callback(err, data);
  });
}
// GET ALL DATA

function getAllData(callback) {
  const sql = `SELECT * FROM ${paket}`;
  database(sql, (err, data) => {
    callback(err, data);
  });
}

// FIND DATA BY ID

function findData(params, callback) {
  const sql = `SELECT * FROM ${paket} WHERE id = ?`;
  database(sql, params, (err, data) => {
    callback(err, data);
  });
}

// ADD DATA

function addData(params, callback) {
  const sql = `INSERT INTO ${paket} (judul,harga) VALUES (?,?)`;
  database(sql, params, (err, data) => {
    callback(err, data);
  });
}

// EDIT DATA

function editData(params, callback) {
  const sql = `UPDATE ${paket} SET judul = ?, harga = ? WHERE id = ?`;
  database(sql, params, (err, data) => {
    callback(err, data);
  });
}

// DELETE DATA

function deleteData(params, callback) {
  const sql = `DELETE FROM ${paket} WHERE id = ?`;
  database(sql, params, (err, data) => {
    callback(err, data);
  });
}

module.exports = {
  getAllData,
  getUserLogin,
  addData,
  findData,
  editData,
  deleteData,
};
