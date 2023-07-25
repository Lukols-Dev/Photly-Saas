const express = require("express");
const { route } = require("express/lib/application");

const {
  createCheckoutSession,
} = require("../controllers/subscription.controllers");

const routes = express.Router();

//route for add new contact
routes.route("/create-session").post(createCheckoutSession);

module.exports = {
  routes: routes,
};
