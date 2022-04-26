
const express = require("express");
const connect = require("./config/db");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

const petController = require("./controllers/petController")
app.use("/listing",petController)

const serviceController = require("./controllers/servicesController")
app.use("/listing",serviceController)

const auth = require("./controllers/authController")
app.use("/",auth)

app.listen(8080,async() =>{

    try {
        await connect();
        console.log("listening port 8080")
    } 
    catch (e) {
        console.log(e.message)
    }
})