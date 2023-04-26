
/* define mongoose user schema */
const mongoose = require('mongoose');
const bcrypt = require(`bcrypt`)
const validator = require(`validator`)

const UsersSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"Input Email"],
            min:[1,'Must be a unique number greater than 0'],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"Input a proper password"]
        },
    },
        {timestamps:true}
);

//static sign up method
UsersSchema.statics.signup = async function(email,password){

    //validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password needs uppercse, lowercase,number, and special character')
    }

    //sign up user
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password: hash})
    return user
}

UsersSchema.statics.login = async function(email,password) {
    if (!email || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }
    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('Incorrect Password')
    }
    return user
}

const Users = mongoose.model('Users',UsersSchema);

module.exports = {Users:Users}