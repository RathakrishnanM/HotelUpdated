const mongoose=require("mongoose");


const RoomSchema=new mongoose.Schema({
    
        userId:{type:String,required:true},
        rooms:[
            {
            roomId:{
                type:Number
            },
            roomType:{
                    type:String
                }
            }
        

        ]
    
    
},{
    timestamps:true
})
module.exports=mongoose.model("Room",RoomSchema);