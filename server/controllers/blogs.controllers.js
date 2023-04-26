const {Blogs} = require('../models/blogs.models');

const handleCreateBlog= async(req,res)=>{
    console.log("====CONTROLLER,handleCreateBlog ",req.body,"====")
    try{
        const blog = await Blogs.create(req.body);
        return res.json(blog);
    }catch (error){
        return res.status(400).json({...error,message:error.message});
    }
};

const handleGetAllBlogs = async (req,res)=>{
    console.log("=====Controller,handlegetallBlogs====")
    try{
        const blogs = await Blogs.find();
        return res.json(blogs);
    }catch(error){
        return res.status(400).json({...error,message:error.message});

    }
}
const handleIdByBlog= async (req,res)=>{
    console.log("=====Controller,handleIdByBlog ",req.params,"=====")
    try{
        const blog = await Blogs.findById(req.params.id);
        return res.json(blog);
    }catch(error){
        return res.status(400).json({...error,message:error.message});

    }
}
const handleDeleteById = async (req,res)=>{
    console.log("=====Controller,handleIdByProduct ",req.params,"=====")
    try{
        const stores = await Blogs.findByIdAndDelete(req.params.id);
        return res.json(stores);
    }catch(error){
        return res.status(400).json({...error,message:error.message});

    }
}
const handleUpdateByIdBlog = async (req,res)=>{
    console.log("=====Controller,handleUpdateByIdBlog ",req.params,req.body,"=====")
    try{
        const blog = await Blogs.findByIdAndUpdate(req.params.id,req.body,{
            runValidators : true,
            new:true,
        });
        return res.json(blog);
    }catch(error){
        return res.status(400).json({...error,message:error.message});

    }
}

module.exports ={
    handleCreateBlog,
    handleGetAllBlogs,
    handleIdByBlog,
    handleDeleteById,
    handleUpdateByIdBlog
}