const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/skills", (req, res) => {
  res.render("skill.ejs");
});

router.get("/future-projects", (req, res) => {
  res.render("future-project.ejs");
})

router.get("/projects", (req, res) => {
  res.render("project.ejs");
});

router.get("/socials", (req, res) => {
  res.render("social.ejs");
});

router.get("/experience", (req, res) => {
  res.render("experience.ejs");
});

router.get("/certifications", (req, res) => {
  res.render("certification.ejs");
});

router.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

router.post("/contact", (req, res) => {
  console.log(req.body);
  const conformation = "Message send successfully!";
  res.render("conformation.ejs", { conformation });
});

router.get("/about", (req, res) => {
  res.render("about.ejs");
});

router.get("/resume", (req, res) => {
  res.render("resume.ejs");
});

module.exports = router;