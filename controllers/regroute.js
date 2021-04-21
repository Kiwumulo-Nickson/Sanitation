const express =require ("express");
const router= express.Router();
const Reg = require("../models/Reg");

router.get("/reg", (req, res) => {
    res.render("driver");
  });

  router.post("/reg", async (req, res) => {
      try {
        const items = new Reg(req.body);
        await items.save();
        console.log("save was sucessful")
        res.send("save was sucessful")
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
    });

  module.exports = router;
  