
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({

    username : {type : String , required :true},
    email : {type : String , required :true},
    password : {type : String , required :true},
    roles : {type : Array, default:["user"] , required:true}
    
})

userSchema.pre("save", function(next){

    if(!this.isModified("password")){
        return next();
    } 

    var hash = bcrypt.hashSync(this.password,8)
    this.password = hash
    return next()

})

userSchema.methods.CheckPassword = function(password){

    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("user",userSchema);
 