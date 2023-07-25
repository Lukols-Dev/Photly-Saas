const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const contactRoutes = require("./routes/contactRoutes");
const authenticationRoutes = require("./routes/authentication.routes");
const subscriptionRoutes = require("./routes/subscription.routes");
const userAccountRoutes = require("./routes/account.routes");
var cors = require("cors");
const galleryRoutes = require("./routes/gallery.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/auth/login", (req, res) => {
  res.send({ hello: "jestes w dodawaniu użytkownik" });
});

//Contact routes
app.use("/api", [
  authenticationRoutes.routes,
  userAccountRoutes.routes,
  contactRoutes.routes,
  subscriptionRoutes.routes,
  galleryRoutes.routes,
]);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
