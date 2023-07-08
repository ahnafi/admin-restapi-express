const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

const api = require("./api/api");
const authRouters = require("./routes/authRouters");
const adminRouters = require("./routes/adminRouters");

app.use("/", api);
app.use("/", authRouters);
app.use("/", adminRouters);
app.use("*", (req, res) => res.redirect("/login"));

app.listen(port, () => {
  console.log(`app run at port ${port}`);
});
