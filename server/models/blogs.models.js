const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"Please input a Store Name"],
            minLength:[3,'Minimum length is {MINLENGTH}.'],
        },
        description:{
            type:String,
            required:[true,"Enter a description"],
            min:[1,'Must be a unique number greater than 0'],
        },
        sports:{
            type:Boolean,
            default:false,
        },
        inspiration:{
            type:Boolean,
            default:false,
        },
        beauty:{
            type:Boolean,
            default:false,
        },

    },
        {timestamps:true}
);

const Blogs = mongoose.model('Blogs',BlogsSchema);

module.exports = {Blogs:Blogs}