const express = require("express");
const profileController = require("../controller/profile.controller");
const guestController = require("../controller/guest.controller");
const profileMiddleware = require("../middleware/profile.middleware");
const guestMiddleware = require("../middleware/guest.middleware");
const config = require("../config");

const router = express.Router();

router.get(config.PORFILE, profileController.getProfile);
router.post(config.PORFILE, profileMiddleware.ensureProfileSaveRequest, profileController.addProfile);

router.get(config.GUEST, guestController.getGuestList);
router.post(config.GUEST, guestMiddleware.ensureGuestSaveRequest, guestController.addGuest);

module.exports = router;