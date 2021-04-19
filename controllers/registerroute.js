const express =require ("express");
const router= express.Router();
const Register = require("../models/Register");

router.get("/regi", (req, res) => {
    res.render("register");
  });

  router.post("/regi", async (req, res) => {
    // if(req.session.user){
      try {
        const regs = new Register(req.body);
        //console.   log(registration1);
        // await Registration1.register(items,req.body.password,(err)=>{
        await regs.save();
        console.log("save was sucessful")
        res.send("save was sucessful")
        // res.redirect("/folist");
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
    });

  module.exports = router;
