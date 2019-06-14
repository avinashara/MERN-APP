const ensureProfileSaveRequest = (req, res, next) => {
    let body = req["body"];
    if (body) {
        let errors = [];
        !body["fName"] && errors.push("request body must include : Female Name");
        !body["mName"] && errors.push("request body must include : Male Name");
        !body["date"] && errors.push("request body must include : Date");
        !body["loc"] && errors.push("request body must include : Location");
        !body["maleMsg"] && errors.push("request body must include :Male Message");
        !body["fMsg"] && errors.push("request body must include : Female Message");
        !body["events"] && errors.push("request body must include : Events");
        !body["travels"] && errors.push("request body must include : Travels");

        if (errors.length > 0) {
            res.status(400).json({ errors });
        } else {
            next();
        }
    }
}
module.exports = {
    ensureProfileSaveRequest
}