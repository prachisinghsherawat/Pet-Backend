
const mongoose = require("mongoose");
require(".env").config()

const connect = () => {

    return mongoose.connect(
        process.env.MONGODB_URL
    )
}

module.exports = connect