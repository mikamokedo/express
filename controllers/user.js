const User = require('../models/user');


module.exports = {
    index: async (req,res,next) =>{
       try{
        const result = await User.find({});
        res.status(200).json(result);      
       }
        catch{
            next(error);
        } 
       


    },
    addUser : async(req,res,next) =>{  
        try{
            const newUser = new User(req.body);
        const result = await newUser.save()
        res.status(201).json(result);     
        }
        catch{
            next(error);
        }
           
    },
    getUser : async(req,res,next) =>{
        try{
            const userID = req.params.userID;
            const user = await User.findById(userID)
            res.status(200).json(user);
        }
        catch{
            next(error);
        }
    },
    replaceUser : async(req,res,next) =>{
        const userID = req.params.userID;
        const infoupdate = req.body;   
        const result = await User.findByIdAndUpdate(userID,infoupdate);
        res.status(200).json(result);
    } ,
    updateUser : async(req,res,next) =>{
        const userID = req.params.userID;
        const infoupdate = req.body;   
        await User.findByIdAndUpdate(userID,infoupdate);
        res.status(200).json('updatesuccess');
    }  
}