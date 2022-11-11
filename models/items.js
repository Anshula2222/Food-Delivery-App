const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Shop=new Schema({
        item_name:{
            type: String,
            required: [true, 'This is a required field']
        },
        price:{
            type: Number,
            required: [true, 'This is a required field']
        }
    });
const MyShop=mongoose.model('MyShop',Shop);
module.exports=MyShop;
