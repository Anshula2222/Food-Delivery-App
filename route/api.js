const express=require("express");
const router=express.Router();
const axios=require("axios");
const Flatted=require("flatted");
const Scheme=require('../models/user');
const ItemsSchema=require('../models/items');
//SIGN UP FOR NEW USERS
router.post('/signup',(req,res,next) =>{
    if(req.body){
        Scheme.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
    }
    else{
        res.json("Input Fields are mandatory");
    }
})
//ADDING NEW ITEMS TO DATABASE OF ALL ITEMS
router.post('/newItem',(req,res,next) =>{
    if(req.body){
        ItemsSchema.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
    }
    else{
        res.json("Input Fields are mandatory");
    }
})
//Editing to push or PATCH new order into cart
router.put('/SendCartNew/:mernName/:item_name/:price',(req,res,next)=>{
    let c={}
    axios.get(`http://localhost:5000/api/EditCart/${req.params.mernName}`)
    .then((data)=>{
        c=data['data']
        if(Object.keys(c).includes(`${req.params.item_name}`)){
            console.log("here")
            c[`${req.params.item_name}`]=parseInt(c[`${req.params.item_name}`])+parseInt(`${req.params.price}`)
            
        }
        else
        {
            c[`${req.params.item_name}`]=parseInt(`${req.params.price}`)
        }
        if(req.params.c!='[object Object]'){
            Scheme.findOneAndUpdate({mernName:req.params.mernName},{cart:c})
            .then((data)=>res.json(data))
            .catch(next);
        }
        console.log(c)
    },[])
    .catch(next);
})
//GETTING CART OF A USER
router.get('/EditCart/:mernName',(req,res,next)=>{
    Scheme.findOne({mernName:req.params.mernName})
    .then((data)=>{
        res.json(data.cart)
    })
    .catch(next);
})
//GETTING THE PRICE OF AN ITEM
router.get('/getDetails/:item_name',(req,res,next) =>{
    ItemsSchema.findOne({item_name:req.params.item_name})
    .then((data)=>{
        if(data==null){
            console.log(null)
        }
        else{
            let p=Flatted.parse(Flatted.stringify(data))
            res.json(p.price);

        }
    })
    .catch(next);
})

//ADDING TO CART
router.get('/addToCart/:mernName/:item_name',(req,res,next) =>{
    var x=0
    axios.get(`http://localhost:5000/api/getDetails/${req.params.item_name}`)
    .then((data)=>{
        x=Flatted.parse(Flatted.stringify(data))
        axios.put(`http://localhost:5000/api/SendCartNew/${req.params.mernName}/${req.params.item_name}/${x.data}`)
        .then(()=>console.log("done"))
        .catch(next); 
        })
    .catch((err)=>console.log(err))
    })

module.exports=router;
