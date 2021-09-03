const {Router} = require("express");
const router=Router();
const{getCovid}=require("../controller/casos.controller");

router.get('/',getCovid);

module.exports=router;