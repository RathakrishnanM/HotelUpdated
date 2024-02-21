const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const cors=require("cors");
const stripeRoute=require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

app.get("/api/test",()=>{
    console.log("test is successful");
})
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    credentials: true,
  }));
  
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/checkOut",stripeRoute)
app.listen(5003,()=>{
    console.log("backend running");
})
