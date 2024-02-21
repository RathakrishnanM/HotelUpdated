// const express=require("express");
// const app=express();
// const dotenv=require("dotenv");
// const mongoose=require("mongoose");
// const authRoute=require("./routes/auth");
// const userRoute=require("./routes/users");

// console.log('Before dotenv.config()');
// dotenv.config();
// console.log('After dotenv.config()');

// app.use(express.json());
// console.log(process.env.MONGO_URL)
// mongoose.connect(process.env.MONGO_URL,{
//   dbName: 'Bookings',
//   useNewUrlParser:true,
//   useUnifiedTopology:true,
//   // useCreateIndex:true,
// })
// .then(() => console.log('Connected to MongoDB'))

// .catch((err)=>console.error(err));
// app.use("/api/auth",authRoute);
// app.use("/api/users",userRoute);

// app.listen("5001",()=>{
//   console.log("Backend is running");
// })




const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");

console.log('Before dotenv.config()');
dotenv.config();
console.log('After dotenv.config()');
app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL,{
  dbName: 'Bookings',
  useNewUrlParser:true,
  useUnifiedTopology:true,
  // useCreateIndex:true,
})
.then(() => console.log('Connected to MongoDB'))

.catch((err)=>console.error(err));
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

app.listen("5001",()=>{
  console.log("Backend is running");
})