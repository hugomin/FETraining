var express = require('express');
var router = express.Router();
router.use("*",function(res,req,next){
    console.log("我是根路由");
    next();
})
router.use("/",function(res,req,next){
    console.log("我是birds");
    next();
})
router.get("/ss",function(req,res){
    console.log("我是birds/ss");
    res.send("hello woshi bird/ss")
})
module.exports = router;