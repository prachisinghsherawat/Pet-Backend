
const express = require("express");
const router = express.Router();

const Pets = require("../models/servicesModel")

router.post("/create/add", async(req,res) =>{
    try {
        
        let pet = await Pets.create(req.body)
        return res.send(pet)

    } catch (e) {
        return res.send(e.message)
    }
})

router.get("/add/:id", async(req,res) =>{
    try {
        
        let pet = await Pets.findOne({pet_id :req.params.id}).lean().exec()
        return res.send(pet)

    } catch (e) {
        return res.send(e.message)
    }
})

module.exports = router

