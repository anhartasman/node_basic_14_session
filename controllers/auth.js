const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById("62b97a0854c5688e1bdf1237")
    .then((user) => {
      req.session.isLoggedIn = true;
      res.redirect("/");
      req.session.user = user;
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
