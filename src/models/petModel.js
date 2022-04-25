
const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

    image : {type : String , required :true}, 
    name : {type : String , required :true},
    city : {type : String , required :true},
    address : {type : String , required :true},
    capacity : {type : String , required :true},
    cost_per_day : {type : String , required :true},
    verified : {type : String , required :true},
    rating : {type : String , required :true}

})

module.exports = mongoose.model("petsDetails",petSchema)