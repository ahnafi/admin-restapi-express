const { getUserLogin } = require("../repository/repository");

function authenticateUser(req, res, callback) {
  const { username, password } = req.body;
  // MENCARI USER
  getUserLogin(`${username}`, (err, data) => {
    if (err) throw err;
    const user = data[0];
    if (typeof user == undefined) {
      return callback(false);
    }
    // MENGECEK PASSWORD
    if (password != user?.password) {
      return callback(false);
    }
    req.session.isLoggedIn = true;
    req.session.username = username;
    callback(true);
  });
}

module.exports = { authenticateUser };
