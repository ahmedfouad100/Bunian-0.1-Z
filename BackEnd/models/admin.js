// Hook = function = middleware
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const joi = require("joi");

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        // required:[true,"Username is Required"] => Database engineer
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6, // if type:String
        // min: => if type:number
        select:false,
    }
},{timestamps:true})

adminSchema.pre("save",async function(next){   // or async ()=>  arrow function handles next automatically but doesn't handle this
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
})

adminSchema.methods.comparePassword= async function(matchedPassword) {
    return await bcrypt.compare(matchedPassword,this.password)
}

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin