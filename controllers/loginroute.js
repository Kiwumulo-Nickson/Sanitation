const express =require ("express");
const router= express.Router();
const passport = require('passport');
// const Reg = require("../models/Reg");

router.get("/", (req, res) => {
    res.render("login");
  });

  router.post('/', passport.authenticate('local'), (req,res) =>{
    req.session.user = req.user;
    // console.log(err);
    res.redirect('/dr');
})


  module.exports = router;
