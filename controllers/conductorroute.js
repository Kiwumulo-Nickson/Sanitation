const express =require ("express");
const router= express.Router();
const Conductor = require("../models/Conductor");

router.get("/co", (req, res) => {
    res.render("conductor");
  });
  router.post("/co", async (req, res) => {
      try {
        const items = new Conductor(req.body);
        await items.save();
        console.log("save was sucessful")
        res.redirect("/clist");
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
  })




  module.exports = router;
