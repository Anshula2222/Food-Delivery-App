const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User=new Schema({
        name:{
            type: String,
            required: [true, 'This is a required field']
        },
        mernName:{
            type: String,
            required: [true, 'This is a required field']
        },
        email:{
            type: String,
            required: [true, 'This is a required field']
        },
        phone_number:{
            type: Number,
            required: [true, 'This is a required field']
        },
        password:{
            type: String,
            required:[true,'This is a required field']
        },
        cart:{
            type:Object

        }
    });
const User_1=mongoose.model('User_1',User);
module.exports=User_1;
