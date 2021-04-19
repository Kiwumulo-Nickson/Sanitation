const express =require ("express");
const router= express.Router();
// const Reg = require("../models/Reg");

router.get("/", (req, res) => {
    res.render("login");
  });


  module.exports = router;
