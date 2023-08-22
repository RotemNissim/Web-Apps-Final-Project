const logout = (req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/login");
    });
  };
  module.exports = {
    requireAdminLogin,
    redirectIfAuthenticated,
    logout
  };
  
  