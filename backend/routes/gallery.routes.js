const express = require("express");
const { addGallery } = require("../controllers/gallery.controller");

const routes = express.Router();

routes.route("/gallery").post(addGallery);

module.exports = {
  routes: routes,
};
