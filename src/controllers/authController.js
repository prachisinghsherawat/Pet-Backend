
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const express = require("express");
const router = express.Router()

const newToken = (user) => {

    return jwt.sign({user}, prachi);
}

router.post("/register" , async(req,res) => {
    
    try {

        let user = await User.findOne({email : req.body.email}).lean().exec()

        if(user){
            return res.status(500).send("please try an another email !")
        }
        
        user = await User.create(req.body)

        const token = newToken(user)

        return res.send({user,token})
        
    } 
    catch (e) {
        
        return res.send(e.message)
    }
})

router.post("/login",async(req,res) => {

    try {

        let user = await User.findOne({email : req.body.email})

        if(!user){
            return res.status(500).send("You entered wrong email or password !")
        }

        const match = user.CheckPassword(req.body.password)

        if(!match){
            return res.status(500).send("You entered wrong email or password !")
        }
        console.log(user)

        const token = newToken(user)

        return res.send({user,token})
        
    } 
    catch (e) {
        
        return res.send(e.message)
    }
})

module.exports = router