const router=require("express").Router();

router.get("/income",verifyTokenAndAdmin,async(req,res)=>{
    const Date=new Date();
    const lastMonth=new Date
})

module.exports=router