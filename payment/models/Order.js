const mongoose=require("mongoose");


const OrderSchema=new mongoose.Schema({
    
        userId:{type:String,required:true},
        rooms:[
            {
            roomId:{
                type:Number
            },
            roomType:{
                    type:String
                },
            },
        

        ],
        amount:{type:Number,required:true},
        address:{type:Object,required:true},
        status:{type:String,default:"pending"},
    
    
},{
    timestamps:true
})
module.exports=mongoose.model("Order",OrderSchema);