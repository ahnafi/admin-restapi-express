const db = require("./connection");

function database(sql, params, callback) {
  db.query(sql, params, (error, result) => {
    return callback(error, result);
  });
}

module.exports = database;
