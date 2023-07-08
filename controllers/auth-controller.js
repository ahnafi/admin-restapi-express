const { authenticateUser } = require("../services/auth-services");

function controllLogin(req, res) {
  authenticateUser(req, res, (data) => {
    if (!data) {
      return res.render("login", {
        title: "login page",
        error:
          "username atau password salah,coba lagi atau hubungi pembuat web",
      });
    }
    return res.redirect("/");
  });
}

module.exports = { controllLogin };
