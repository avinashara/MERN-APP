const mongoose = require("mongoose");
const schema = mongoose.Schema;

let guest = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    msg: {
        type: String,
        required: false
    },
    attending: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Guest", guest);
