const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// Static files for CSS, JS, and assets
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse JSON bodies (if needed in the future)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// // Start server
// app.listen(port, () => {
//   console.log(`listening on port : ${port}`);
// });

app.listen(port, '0.0.0.0', () => {
  console.log(`listening on port : ${port}`);
});

// Route to render search page (with no car selected yet)
app.get("/insta", (req, res) => {
  res.render("instaSearch.ejs");
});

// Dynamic route for selecting a specific car from the search
app.get("/insta/:carName", (req, res) => {
  const { carName } = req.params;
  const carData = require("./data.json"); // Load car data

  const carDetails = carData[carName];

  if (carDetails) {
    res.render("instagram.ejs", { data: carDetails });
  } else {
    res.render("errorAcc.ejs");
  }
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice.ejs", { diceVal });
});
