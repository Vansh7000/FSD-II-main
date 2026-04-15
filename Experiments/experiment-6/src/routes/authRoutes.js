const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/login", authController.login);

router.get("/protected", verifyToken, authController.protected);

module.exports = router;