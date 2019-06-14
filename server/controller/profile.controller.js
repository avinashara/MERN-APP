const Profile = require("../model/profile.model");
function getProfile(req, res) {
    Profile.find().exec((err, result) => {
        if (err) {
            console.log('DB Query Error:', err);
        } else {
            res.send(result);
        }
    });
};
function addProfile(req, res) {
    let { fName, mName, date, loc, maleMsg, fMsg, events, travels } = req["body"];
    let profile = new Profile({ fName, mName, date, loc, maleMsg, fMsg, events, travels });
    profile.save(err => {
        if (err) {
            res.status(500).json({ msg: err });
        }
        res.status(200).json({ msg: "Entry Added to Profile collection." });
    });
}

module.exports = {
    addProfile,
    getProfile
}
