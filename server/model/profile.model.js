const mongoose = require("mongoose");
const schema = mongoose.Schema;

let profileSchema = new schema({
    fName: String,
    mName: String,
    date: String,
    loc: String,
    maleMsg: String,
    fMsg: String,
    events: [
        {
            name: String,
            date: String,
            time: String,
            address: String,
            venue: String,
            map: String
        }
    ],
    travels: [
        {
            name: String,
            details: String
        }
    ]
})
module.exports = mongoose.model('Profile', profileSchema);