const express =require ("express");
const router= express.Router();

router.get("/ho", (req, res) => {
    res.render("homepage");
  });

module.exports = router;

  