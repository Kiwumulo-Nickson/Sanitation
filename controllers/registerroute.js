const express =require ("express");
const router= express.Router();
const Signup = require("../models/Signup");

router.get("/regi", (req, res) => {
    res.render("signup");
  });

  router.post("/regi", async (req, res) => {
    // if(req.session.user){
      try {
        const items = new Signup(req.body);
        //console.   log(registration1);
        // await Registration1.register(items,req.body.password,(err)=>{
        await items.save();
        console.log("save was sucessful")
        res.redirect("/login");
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
  })
  
module.exports = router;
