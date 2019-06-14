const express = require("express");
const profileMiddleware = require("../middleware/profile.middleware");
const config = require("../config");
const router = express.Router();

const profileCtrl = require("../controller/profile.controller");

router.get(config.PORFILE, profileCtrl.getReq);
router.post(config.PORFILE, profileMiddleware.ensureProfileSaveRequest, profileCtrl.addProfile);

module.exports = router;