const logout = (req, res, next) => {
  // Assuming you are using a session-based authentication system
  // Clear the session data to log the user out
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/login");
  });
};

module.exports = {
  requireAdminLogin: (pathToRedirect = '/admin') => (req, res, next) => {
    if (!req.session.adminId) {
      return res.redirect("/login?pathToRedirect=" + pathToRedirect);
    }
    next();
  },
  
  redirectIfAuthenticated: (req, res, next) => {
    if (req.session.adminId) {
      return res.redirect("/admin");
    }
    next();
  },
  
  logout
};
