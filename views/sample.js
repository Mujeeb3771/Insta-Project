const express = require("express");

const app = express();
const path = require("path"); //view path

const port = 1010;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //view path

// app.get("/", (req, res) => {
//   res.send("this is home");
// });

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

// app.get("/rolldice", (req, res) => {
//   res.render("rolldice.ejs");
// });

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice.ejs", { diceVal });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
