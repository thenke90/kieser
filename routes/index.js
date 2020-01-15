var express = require("express"),
    router = express.Router();
    

//Initial landing page route
router.get("/", function(req,res){
   res.render("start");
});

module.exports = router;