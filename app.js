const express = require("express");
const path = require("path");

// require the multer configuration file
const upload = require("./multer/multer");

// creating an express app with PORT
const app = express();
const PORT = 8001;

// set the ejs engine and path for views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// set the middleware for parsing the form data
app.use(express.urlencoded({ extended: false }));

// static rpute fpor rendering home page
app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

// Run the server
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
