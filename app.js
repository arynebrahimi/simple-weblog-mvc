const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

const postRoutes = require("./routes/postRoutes");

const app = express();

// setting ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static folder
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routes
app.use("/", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
