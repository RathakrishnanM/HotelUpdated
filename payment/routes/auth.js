const router=require("express").Router();
const User=require("../models/User")
const CryptoJS=require("crypto-js");
router.post("/register",async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC)
        .toString(),
    })

try{
const savedUser=await newUser.save();
res.status(201).json(savedUser)

}catch(err){res.status(500).json(err)}
});

//LOGIN
// router.post("/login",async(req,res)=>{
//     try{
//         const user = await User.findOne({ username: req.body.username });

//     !user && res.status(401).json("wrong credentials");
//     const hashedPassword=CryptoJS.AES.decrypt
//     (user.password,process.env.PASS_SEC);
//     const password=hashedPassword.toString(CryptoJS.enc.Utf8);
//     password!==req.body.password && res.status(401).json("Wrong Credentials!");
//     res.status(200).json({ message: "Login successful" });
//     }catch(err){
//         res.status(500).json(err)
//     }
// })


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
       
            return res.status(401).json("Wrong credentials");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials");
            
        }
        const{password,...others}=user;

        // Login successful
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports=router