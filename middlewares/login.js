const requireAdminLogin = (pathToRedirect = '/admin') => (req, res, next) => {
    if (!req.session.adminId && !req.session.userId) {
        console.log(req.session.adminId);
        return res.redirect("/login?pathToRedirect=" + pathToRedirect);
    }
    next();
};

const redirectIfAuthenticated = (req, res, next) => {
    if (req.session.adminId) {
        return res.redirect("/admin");
    } else if (req.session.userId) {
        console.log('UserID in session:', req.session.userId);
        return res.redirect("/users/" + req.session.userId);
    }
    next();
};

module.exports = {
    requireAdminLogin,
    redirectIfAuthenticated
};