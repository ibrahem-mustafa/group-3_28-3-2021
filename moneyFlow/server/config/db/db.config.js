const mongoose = require("mongoose");


const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/moneyFlow3", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        console.log("Connected To DB");
    } catch(err) {
        console.log('Connection To DB Failed')
        console.log(err)
    }
}

module.exports = {dbConnect}