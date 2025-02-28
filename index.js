const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const ejsMate = require("ejs-mate");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const Sections = require("./routes/sections.js");


app.use("/", Sections);

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})