const verify = (req, res, next) => {
  const session = req.session.isLoggedIn;

  if (!session) {
    return res.redirect('/login');
  }

  next();
};

module.exports = {verify};
