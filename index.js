const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const server = express();

const loginPage = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.password);
  console.log(req.body.email);
  res.send("Welcome!");
};

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({ extended: false }));
server.post("/login", loginPage);

server.listen(7000, () => {
  console.log("Server is ready!");
});
