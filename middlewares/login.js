const requireAdminLogin = (pathToRedirect = '/admin') => (req, res, next) => {
    if (!req.session.adminId) {
        return res.redirect("/login?pathToRedirect=" + pathToRedirect);
    }
    next();
};

const redirectIfAuthenticated = (req, res, next) => {
    if (req.session.adminId) {
        return res.redirect("/admin");
    }
    next();
};

module.exports = {
    requireAdminLogin,
    redirectIfAuthenticated
};

const requireUserLogin = (pathToRedirect = '/user') => (req, res, next) => {
  if (!req.session.userId) {
    req.flash('error', 'Please log in to access this page.');
    return res.redirect(`${pathToRedirect}?pathToRedirect=${encodeURIComponent(req.originalUrl)}`);
  }
  next();
};

const redirectIfUserAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    req.flash('info', 'You are already logged in.');
    return res.redirect("/index"); // Redirect to user dashboard
  }
  next();
};

module.exports = {
  requireUserLogin,
  redirectIfUserAuthenticated
};
