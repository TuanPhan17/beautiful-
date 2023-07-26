const {Users} = require('../models/users.models');
const jwt = require(`jsonwebtoken`)

const createToke = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const handleCreateUser= async(req,res)=>{
    console.log("====CONTROLLER,handleUserStores ",req.body,"====")
    try{
        const User = await Users.create(req.body);
        return res.json(User);
    }catch (error){
        return res.status(400).json({...error,message:error.message});
    }
};
const loginUser = async(req,res)=>{
    const {email,password}= req.body
    try{
        const user = await Users.login(email,password)
        
        //create token
        const token =createToke(user._id)
        res.status(200).json({email,token})
    }catch(error){
        console.log(error)
        return res.status(400).json({...error,message:error.message});
    }

    res.json({msg:'login user'})
}


const signUser = async(req,res)=>{
    const {email,password}= req.body
    try{
        const user = await Users.signup(email,password)
        
        //create token
        const token =createToke(user._id)
        res.status(200).json({email,token})
    }catch(error){
        return res.status(400).json({...error,message:error.message});
    }
    res.json({msg:'signup user'})
}


const handleGetAllUsers = async (req,res)=>{
    console.log("=====Controller,handlegetallUsers====")
    try{
        const users = await Users.find();
        return res.json(users);
    }catch(error){
        return res.status(400).json({...error,message:error.message});

    }
}
const handleIdByUser = async (req,res)=>{
    console.log("=====Controller,handleIdBySUser ",req.params,"=====")
    try{
        const user = await Users.findById(req.params.id);
        return res.json(user);
    }catch(error){
        return res.status(400).json({...error,message:error.message});
    }
}

module.exports ={
    loginUser,
    signUser,
    handleCreateUser,
    handleGetAllUsers,
    handleIdByUser,
}