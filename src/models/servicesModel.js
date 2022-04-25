
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const serviceSchema = new mongoose.Schema({

    imgUrl : {type : String , required :true},
    name : {type : String , required :true},
    limit : {type : String , required :true},
    size : {type : String , required :true},
    sleep : {type : String , required :true},
    area : {type : String , required :true},
    emergency : {type : String , required :true},
    walks : {type : String , required :true},
    category : {type : String , required :true},
    pet_id : {type : mongoose.Schema.Types.ObjectId , ref: "petDetails" , required : true }
})

module.exports = mongoose.model("petService",serviceSchema)