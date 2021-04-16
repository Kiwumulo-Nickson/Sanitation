const express =require ("express");
const router= express.Router();
const Reg = require("../models/Reg");

router.get("/reg", (req, res) => {
    res.render("form");
  });

  router.post("/reg", async (req, res) => {
    // if(req.session.user){
      try {
        const items = new Reg(req.body);
        //console.   log(registration1);
        // await Registration1.register(items,req.body.password,(err)=>{
        await items.save();
        console.log("save was sucessful")
        res.send("save was sucessful")
        // res.redirect("/folist");
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
    });

  module.exports = router;
  