// Importing Libraries
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// .env file configurations
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

/***** Note: Database Connection *****/
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("Database Connected"));
const routes = {
  defaultRoutes: require("./src/routes/customer-routes"),
};

app.use(routes.defaultRoutes);

// Note: Checking all incoming request handler...!
app.use((req, res, next) => {
  console.log(`A request came ${req.body}`);
  next();
});
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
