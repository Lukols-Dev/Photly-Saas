const express = require("express");
const {
  getDataUserAccount,
  getActualDBSize,
  updateSubscriptionID,
} = require("../controllers/account.controller");

const routes = express.Router();

//Route for getDataUserAccount
routes.route("/auth/account/:id").get(getDataUserAccount);
//Route for updateSubscriptionID
routes.route("/auth/account/update-subscription").post(updateSubscriptionID);
// Testing for check collection size
routes.route("/auth/account/collection-size/:id").get(getActualDBSize);

module.exports = {
  routes: routes,
};
