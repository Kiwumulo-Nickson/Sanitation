const express =require ("express");
const router= express.Router();
const Driver = require("../models/Driver");

router.get("/dr", (req, res) => {
    res.render("driver");
  });

  router.post("/dr", async(req, res) => {
    try {
      let up = Driver(req.body);
      await up.save();
      console.log("save was sucessful")
      res.redirect("/clist");
    } catch(err) {
      console.log(err);
      res.status(400).send("Registration wasnot succesful");
    }
  });


  module.exports = router;
