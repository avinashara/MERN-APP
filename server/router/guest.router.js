const express = require("express");
const guestMiddleWare = require("../middleware/guest.middleware");
const config = require("../config");
const guestController = require("../controller/guest.controller");

const router = express.Router();

router.get(config.GUEST, guestController.getGuestList);
router.post(config.GUEST, guestMiddleWare.ensureGuestSaveRequest, guestController.addGuest);

module.exports = router;