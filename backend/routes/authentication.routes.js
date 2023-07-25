const express = require("express");
const {
  createUserAccount,
  loginWithEmailPassword,
  logOutFromAccount,
  checkCurrUser,
} = require("../controllers/user.controllers");

const routes = express.Router();

//Route for register email/password
routes.route("/auth/register").post(createUserAccount);
//Route for login email/password
routes.route("/auth/login").post(loginWithEmailPassword);
//Route for logout user
routes.route("/auth/logout").post(logOutFromAccount);
//Route for check curr user
routes.route("/auth/currentuser").post(checkCurrUser);

module.exports = {
  routes: routes,
};

// TODO: add swagger docs
