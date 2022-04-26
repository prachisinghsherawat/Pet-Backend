
const express = require("express");
const connect = require("./config/db");
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(cors())

const petController = require("./controllers/petController")
app.use("/listing",petController)

const serviceController = require("./controllers/servicesController")
app.use("/listing",serviceController)

const auth = require("./controllers/authController")
app.use("/",auth)

app.listen(PORT,async() =>{

    try {
        await connect();
        console.log("listening port")
    } 
    catch (e) {
        console.log(e.message)
    }
})