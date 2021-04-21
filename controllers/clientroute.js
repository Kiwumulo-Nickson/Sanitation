const express =require ("express");
const router= express.Router();
const Client = require("../models/Client");

router.get("/client", (req, res) => {
    res.render("client");
  });
  
  router.post("/client", async (req, res) => {
      try {
        const items = new Client(req.body);
        await items.save();
        console.log("save was sucessful")
        res.redirect("/clist");
        } catch (err) {
        res.status(400).send("Submission was not succesful ,please try again");
        console.log(err);
      }
  })

  router.get("/clist", async (req, res) => {
      try {
        // let items=await Registration2.find();
        let items=await Client.find();
    
        console.log(items);
        res.render("table", { users: items });
      } catch (err) {
        res.status(400).send("cannot find the registration lists");
      }
  
  });

  module.exports = router;
                