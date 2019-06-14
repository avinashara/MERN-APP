const mongoose = require("mongoose");
const config = require("./config");


module.exports = function connection() {
    function callback(err) {
        if (err) {
            console.log("DB Connection Error:", err);
        } else {
            console.log("DB Connection established!!");
        }
    }
    console.log("URLsad",config.dbUrl);
    mongoose.connect(config.dbUrl, { useNewUrlParser: true }, callback);
}

