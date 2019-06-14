const ensureGuestSaveRequest = (req, res, next) => {
    let body = req["body"];
    if (body) {
        let errors = [];
        !body["name"] && errors.push("request body must include : Guest Name");
        !body["email"] && errors.push("request body must include : Email");
        !body["flag"] && errors.push("request body must include : Attending option");

        if (errors.length > 0) {
            res.status(400).json({ errors });
        } else {
            next();
        }
    }
}
module.exports = {
    ensureGuestSaveRequest
}