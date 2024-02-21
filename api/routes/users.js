
const router=require('express').Router()
const User=require('../models/User');
const bcrypt=require("bcrypt");
//UPDATE
router.put("/:id",async(req,res)=>{
  const userId=req.params.id;
  if(req.body.userId===userId){
    if(req.body.password){
      const salt=await bcrypt.genSalt(10);
      req.body.password=await bcrypt.hash(req.body.password,salt);
    }
  try{
      const updateUser=await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
      });
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(updateUser);

   
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }}
  else{
    res.status(401).json("You can update only your account");
  }
})
module.exports=router;