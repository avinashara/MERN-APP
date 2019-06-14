
const Guest = require("../model/guest.model");

function addGuest(req, res) {
    let clientData = req["body"];
    let guest = new Guest({
        name: clientData.name,
        email: clientData.email,
        msg: clientData.msg,
        attending: clientData.flag
    });
    guest.save(function (err) {
        if (err) {
            let msg = err["code"] === 11000 ? "Duplicate Email!! You have already addred your entry in guest book." : err["message"];
            res.status(400).json({ msg });
        } else {
            res.status(200).json({ msg: "Entry Added to guest book." });
        }
    });
};
function getGuestList(req, res) {
    Guest.find().exec((err, result) => {
        if (err) {
            console.log("Something Went Wrong!!", err);
        }
        res.send(result);
    });
}

module.exports = {
    addGuest,
    getGuestList
}