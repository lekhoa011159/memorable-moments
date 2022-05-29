const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

const databaseConnection = require("./services/database");
const posts = require("./routes/posts");

databaseConnection();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// routes
app.get("/", (req, res) => res.status(200).send(`IT WORKED !!`));
app.use("/apis/posts/v1", posts);

app.listen(process.env.PORT || 5000, () => {
  console.log(`LISTENING ON PORT: ${process.env.PORT}`);
});
